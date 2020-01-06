const User = require("../models/user");
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')
const crypto = require('crypto')

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        process.env.M_KEY
    }
  })
);

exports.getLogin = (req, res, next)=>{
    const isLoggedIn='';
    // if (isLoggedIn){
    //     const isLoggedIn = req.get("Cookie").split("=")[1];
    // }
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: false
    })
}

exports.postLogin = (req, res, next) => {
  
  const email = req.body.email
  const password = req.body.password
  User.findOne({where:{email:email}})
    .then(user =>{
      if(!user){
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
  res.render("auth/signup", {
    path: "/signup",
    pageTitle: "Signup",
    isAuthenticated: false
  });
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email
  const password = req.body.password
  const confirmpassword = req.body.confirmpassword
  User.findOne({where: { email: email }})
    .then(userDoc => {
      if (userDoc) {
        return res.redirect("/signup");
      }
      return bcrypt
      .hash(password, 12)
      .then(hashedPassword => {
        const user = new User({
        email: email,
        password: hashedPassword,
        anon:false
            });
      return user.save();
          })
        })
    .then(result => {
      res.redirect("/login");
    })
    .catch(err=>{console.log(err)})
};