const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mult = require("multer");

const actions = require("./database");
const upload = require("./upload");

console.log(__dirname);

const app = express();
const port = process.env.PORT || 3000;

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(express.static(`${__dirname}/server`));
app.use(express.static(`${__dirname}/uploads/images`));
app.use(urlencodedParser);
app.use(jsonParser);
app.use(cors());
let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  next();
}
app.use(allowCrossDomain);
app.options('*', cors());

app.get("/", async (req, res) => {
  res.end("<h1>Server started</h1>");
});

// categories names
app.post("/createCategory", upload.single("image"), actions.createCategoryName);
// app.post('/createCategory', upload.single('image'), actions.createCategoryName);
app.get("/getCategory/:categoryName", actions.getCategoryName);
app.get("/getAllCategories", actions.getAllCategories);
app.delete("/deleteCategory/:categoryName", actions.deleteCategory);
app.put("/updateCategory", upload.single("image"), actions.updateCategory);

// categories cards
app.post(
  "/createCard",
  upload.any(),
  actions.createCategegoryCard
);
app.get("/getCard/:categoryName/:cardName");
app.get("/getAllCategoryCards/:categoryName", actions.getAllCategoryCards);
app.get("/getCategoryCardsCount/:categoryName", actions.getCategoryCardsCount);
app.delete("/deleteCard/:categoryName/:cardName", actions.deleteCard);
app.put("/updateCard", upload.any(), actions.updateCard);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

module.exports.port = port;