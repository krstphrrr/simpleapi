module.exports = (req, res, next) => {
  if (!req.session.isAdm) {
    return res.redirect("/");
  }
  next();
};
