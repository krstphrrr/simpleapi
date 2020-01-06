module.exports = (req, res, next) => {
<<<<<<< HEAD
  if (req.session.isAdm) {
    console.log('works!')
=======
  if (!req.session.isAdm) {
>>>>>>> a002784f9860b48564c2825b4149d662a5d15298
    return res.redirect("/");
  }
  next();
};
