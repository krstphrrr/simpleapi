module.exports = (req, res, next) => {
  if (req.session.isAdm) {
    console.log('works!')
    return res.redirect("/");
  }
  next();
};
