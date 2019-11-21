var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var publicFiles = path.join(__dirname, "/public/");
var port = process.env.PORT || 5000;


// SET & USE******************************************
// set static files to the public directory
app.use(express.static(publicFiles));
// set up body parser
app.use(bodyParser.urlencoded({
  extended: true
}));

// set up templating engine
app.set("view engine", "ejs");


// ROUTES**********************************************
// ROOT PAGE
app.get("/", function (req, res) {
  var pageTitle = "Index"
  res.render("index", {pageTitle: pageTitle});
});

app.get("/linux_commands", function (req, res) {
  var pageTitle = "Linux Commands"
  res.render("linux_commands", {pageTitle: pageTitle});
});

app.get("/linux_directories", function (req, res) {
  var pageTitle = "Linux Directories"
  res.render("linux_directories", {pageTitle: pageTitle});
});

app.get("/linux_files", function (req, res) {
  var pageTitle = "Linux Files"
  res.render("linux_files", {pageTitle: pageTitle});
});

app.get("/linux_firewall", function (req, res) {
  var pageTitle = "Linux Firelwall"
  res.render("linux_firewall", {pageTitle: pageTitle});
});

app.get("/linux_permissions", function (req, res) {
  var pageTitle = "Linux Permissions"
  res.render("linux_permissions", {pageTitle: pageTitle});
});

app.get("/linux_root_privledges", function (req, res) {
  var pageTitle = "Linux Root Privleges"
  res.render("linux_root_privledges", {pageTitle: pageTitle});
});

app.get("/linux_server_setup", function (req, res) {
  var pageTitle = "Linux Server Setup"
  res.render("linux_server_setup", {pageTitle: pageTitle});
});

app.get("/linux_sudo", function (req, res) {
  var pageTitle = "Sudo"
  res.render("linux_sudo", {pageTitle: pageTitle});
});

app.get("/linux_sudoers_file", function (req, res) {
  var pageTitle = "Sudoers File"
  res.render("linux_sudoers_file", {pageTitle: pageTitle});
});

app.get("/scripting_bash_scripting", function (req, res) {
  var pageTitle = "Bash Scripting"
  res.render("scripting_bash_scripting", {pageTitle: pageTitle});
});

app.get("/scripting_create_scripts", function (req, res) {
  var pageTitle = "Creating & Running Bash Scripts"
  res.render("scripting_create_scripts", {pageTitle: pageTitle});
});

app.get("/webpack", function (req, res) {
  var pageTitle = "Webpack"
  res.render("webpack", {pageTitle: pageTitle});
});

app.get("/uscg_rules", function (req, res) {
  var pageTitle = "USCG Rules of the Road Questions"
  res.render("uscg_rules", {pageTitle: pageTitle});
});

app.get("/page", function (req, res) {
  var pageTitle = "Template Page"
  res.render("template_page", {pageTitle: pageTitle});
});

// ***********************************

// SPLAT ROUTE
app.get("*", function (req, res) {
  var pageTitle = "Error 404: No route for page request."
  res.render("404", {pageTitle: pageTitle});
});


// SERVER LISTEN****************************************
app.listen(port, function () {
  console.log("Server is running on port " + port);
});