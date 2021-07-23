const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const app = express();
const path = require("path");
const config = require("../webpack.config.js");
const compiler = webpack(config);
const port = process.env.PORT || 3000;

const router = express.Router();
const bodyParser = require("body-parser");

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.post("/createUser", (req, res) => {
  const userData = req.body;
  console.log("user was successfully created: ", userData);

  if (userData.password === userData.confirmation) {
    res.redirect("/");
  }
});

// Serve the files on port 3000.
app.listen(port, function () {
  console.log("Example app listening on port 3000!\n");
});
