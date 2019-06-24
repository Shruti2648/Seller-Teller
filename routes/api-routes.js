// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");
var Handlebars = require("handlebars");
var MomentHandler = require("handlebars.moment");
MomentHandler.registerHelpers(Handlebars);

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.
  // cms route loads cms.html

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("signup");
  });

  app.get("/index", function(req, res) {
    res.render("index");
  });

  app.get("/browse", function(req, res) {
    db.Post.findAll({}).then(function(dbPost) {
      // res.json(dbPost);
      var hbsObject = {
        posts: dbPost
      };
      // console.log(hbsObject);
      res.render("browse", hbsObject);
    });
  });

  app.get("/search", function(req, res) {
    // if (req.query.state && req.query.city){
    //   db.Post.findAll({
    //     where: {
    //       storeState: req.query.state,
    //       storeCity: req.query.city
    //     }
    //   })
    //     .then(function (dbPost) {
    //       // res.json(dbPost);
    //       var hbsObject = {
    //         posts: dbPost
    //       };
    //       console.log(hbsObject);
    //         res.render("search", hbsObject);
    //     });
    // };
    res.render("search");
    // res.render("search");
  });

  app.get("/add-sale", function(req, res) {
    res.render("add-sale");
  });

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("members");
    }
    res.render("signup");
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("members");
    }
    res.render("login");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.render("members");
  });
};
