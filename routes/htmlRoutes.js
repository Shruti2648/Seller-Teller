var path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });

  app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/search.html"));
  });

  app.get("/browse", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/browse.html"));
  });

  app.get("/add-sale", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/add-sale.html"));
  });
};
