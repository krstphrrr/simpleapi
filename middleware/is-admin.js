module.exports = (req, res, next) => {
<<<<<<< HEAD
<<<<<<< HEAD
  if (req.session.isAdm) {
    console.log('works!')
=======
  if (!req.session.isAdm) {
>>>>>>> a002784f9860b48564c2825b4149d662a5d15298
=======
  if (req.session.isAdm) {
    console.log('works!')
>>>>>>> parent of 039df21... added password recovery
    return res.redirect("/");
  }
  next();
};
