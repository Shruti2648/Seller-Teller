var path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });

<<<<<<< HEAD
  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
=======
  app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/search.html"));
>>>>>>> 008636bf889cd73a64314137984aacc6723b9229
  });

  app.get("/browse", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/browse.html"));
  });

  app.get("/add-sale", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/add-sale.html"));
  });

  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
