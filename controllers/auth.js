const Sequelize = require('sequelize')
const Op = Sequelize.Op
const User = require("../models/user");
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')
const crypto = require('crypto')

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        "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"
    }
  })
);

exports.getLogin = (req, res, next)=>{
  let success = req.flash("success");
  if (success.length > 0) {
    success = success[0];
  } else {
    success = null;
  }
  let message = req.flash('error')
  if (message.length>0){
    message = message[0]
  } else {
    message = null
  }
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        errorMessage: message,
        successMessage: success
    })
}

exports.postLogin = (req, res, next) => {
  
  const email = req.body.email
  const password = req.body.password
  User.findOne({where:{email:email}})
    .then(user =>{
      if(!user){
        req.flash('error', 'invalid email or password')
        return res.redirect('/login')
      }
      bcrypt.compare(password, user.password)
        .then(doMatch =>{
          if(doMatch){
            req.session.isLoggedIn = true;
            req.session.user = user;
            if(email==='test@test.com'){
              req.session.isAdm = true
                }
            return req.session.save(err => {
              console.log(err);
              res.redirect("/");
            });
          }
          req.flash("error", "invalid email or password");
          res.redirect('/login')
        })
        .catch(err=>{
          console.log(err)
          res.redirect('/login')
        })
    })
    .catch(err =>console.log(err))
};;

exports.postLogout = (req, res, next) => {
  req.session.destroy(err=> {
      console.log(err)
      res.redirect('/')
  })
};

exports.getSignup = (req, res, next) => {
  let message = req.flash("error");
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render("auth/signup", {
    path: "/signup",
    pageTitle: "Signup",
    errorMessage: message
  });
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email
  const password = req.body.password
  const confirmpassword = req.body.confirmpassword
  User.findOne({where: { email: email }})
    .then(userDoc => {
      if (userDoc) {
        req.flash("error", "email already exists!");
        return res.redirect("/signup");
      }
      return bcrypt
      .hash(password, 12)
      .then(hashedPassword => {
        const user = new User({
        email: email,
        password: hashedPassword
            });
      return user.save();
          })
        })
    .then(result => {
      res.redirect("/login");
      return transporter.sendMail({
        to: email,
        from: 'test@nodetest.com',
        subject: 'Signup succeeded!',
        html:'<h1>You successfully signed up</h1>'
      })
      .catch(err=>{
        console.log(err)})
    })
    .catch(err=>{
      console.log(err)})
};

exports.getReset = (req, res, next) => {
  let message = req.flash("error");
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render("auth/reset", {
    path: "/reset",
    pageTitle: "Reset Password",
    errorMessage: message
  });
}

exports.postReset = (req, res, next) =>{
  crypto.randomBytes(32, (err, buffer)=>{
    if (err){
      console.log(err)
      return res.redirect('/reset')
    }
    const token = buffer.toString('hex')
    User.findOne({where:{email:req.body.email}})
    .then(user =>{
      if(!user){
        req.flash('error', 'No account with that email found')
        return res.redirect('/reset')
      }
      user.resetToken = token
      user.resetTokenExpiration = Date.now() + 3600000
      return user.save()
    })
    .then(result =>{
      res.redirect("/login");
      return transporter.sendMail({
        to: req.body.email,
        from: "test@nodetest.com",
        subject: "Password reset",
        html: `
        <p> You requested a password reset</p>
        <p> Click this <a href="http://localhost:5000/reset/${token}">link</a> to set a new password. </p>
        <p> Link valid for only one hour.</p>
        `
      });
    })
    .catch(err=>{console.log(err)})
  })
}

exports.getNewPassword = (req, res, next) => {
  const token = req.params.token

  User.findOne({where:{
    resetToken:token, 
    resetTokenExpiration: {
      [Op.gt]:Date.now()}}})
  .then(user => {
    let message = req.flash("error");
    if (message.length > 0) {
      message = message[0];
    } else {
      message = null;
    }
    res.render("auth/new-password", {
      path: "/new-password",
      pageTitle: "New Password",
      errorMessage: message,
      passwordToken: token,
      userId: user.id.toString()
    });
  })
  .catch(err=>{console.log(err)})
}

exports.postNewPassword = (req, res, next) =>{
  const newPassword = req.body.password 
  const userId = req.body.userId 
  const passwordToken = req.body.passwordToken
  let resetUser
  User.findOne({ where:{
    resetToken: passwordToken, 
    resetTokenExpiration: {
      [Op.gt]:Date.now()},
    id: userId
  }})
  .then(user =>{
    resetUser = user
    return bcrypt.hash(newPassword, 12)
  })
  .then(hashedPassword =>{
    resetUser.password = hashedPassword
    resetUser.resetToken = null 
    resetUser.resetTokenExpiration = undefined 
    return resetUser.save()
  })
  .then(result => {
    req.flash("success", "Password updated!");
    res.redirect('/login')
  })
  .catch(err=>{
    console.log(err)})
}