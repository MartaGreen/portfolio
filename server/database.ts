var mongoose = require("mongoose");
const path = require("path");

const models = require("./models");
const newCategoryName = models.categoryNameModel;
const newCategoryCard = models.categoryCardModel;
const appExp = require("./app");
const uri =
  "mongodb+srv://Marta:qwerty1234@cluster0.n4pdx.mongodb.net/dataStorage?retryWrites=true&w=majority";

var cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dvy2tuezq",
  api_key: "677154218778824",
  api_secret: "2xgP9f8xBmuvSBTobNiWjganm2w",
});

mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  function (err) {
    //Если при соединении с БД происходит ошибка, то выбрасывается исключение, и все дальнейшее исполнение функции прерывается.
    if (err) throw err;
    //Если соединение с БД выполнено успешно выводится сообщение 'БД подключена'
    console.log("DB connected");
  }
);
const categoriesNames = mongoose.model("categryName");
const cardsNames = mongoose.model("categoryCard");

module.exports.getAllCategories = async (req, res) => {
  await categoriesNames.find({}, (err, data) => {
    try {
      console.log("categories, ", data);
      res.send(data);
    } catch {
      console.log("get all categories error, ", err);
    }
  });
};

module.exports.createCategoryName = async (req, res) => {
  console.log("image: ", req.file);
  console.log("name: ", req.body.name);

  await cloudinary.uploader.upload(
    path.resolve(`uploads/images/${req.file.filename}`),
    { public_id: req.body.name },
    async (err, data) => {
      if (err) console.log("Cloudinary error, ", err);
      else {
        console.log("Cloudinary saved, ", data);

        const category = new newCategoryName({
          name: req.body.name,
          imgSrc: data.secure_url,
        });

        try {
          await category.save();
          res.send(category);
        } catch (e) {
          console.log("save category error, ", e);
        }
      }
    }
  );
};

module.exports.getCategoryName = async (req, res) => {
  const catName: string = req.params.categoryName;
  categoriesNames.find({ name: catName }, (err, data) => {
    try {
      console.log("data", data);
      res.send({
        imgSrc: data[0].imgSrc,
        category: data[0].name,
      });
    } catch {
      console.log("Find category error, ", err);
    }
  });
};

module.exports.createCategegoryCard = async (req, res) => {
  console.log("start creating card");
  console.log("files: ", req.files);

  const cardData = req.body;

  const cloudImg = await cloudinary.uploader.upload(
    path.resolve(`uploads/images/${req.files[0].filename}`),
    { public_id: `${cardData.cardName}_image` },
    async (err, data) => {
      if (err) console.log("create card image error, ", err);
      else {
        console.log("create card image, ", data);
        return data;
      }
    }
  );
  const cardImgSrc: string = cloudImg.secure_url;

  const cloudSound = await cloudinary.uploader.upload(
    path.resolve(`uploads/sounds/${req.files[1].filename}`),
    { resource_type: "auto", public_id: `${cardData.cardName}_sound` },
    async (err, data) => {
      if (err) console.log("create card sound error, ", err);
      else {
        console.log("create card sound, ", data);
        return data;
      }
    }
  );
  const cardSoundSrc: string = cloudSound.secure_url;

  const card = newCategoryCard({
    category: cardData.category,
    cardName: cardData.cardName,
    translate: cardData.translate,
    imgSrc: cardImgSrc,
    soundSrc: cardSoundSrc,
  });

  try {
    await card.save();
    res.status(201).json(card);
  } catch (e) {
    console.log("created card error", e);
  }
};

module.exports.getAllCategoryCards = async (req, res) => {
  const categoryName: string = req.params.categoryName;

  await cardsNames.find({ category: categoryName }, (err, data) => {
    if (err) console.log("get category cards error, ", err);
    else {
      console.log("category cards, ", data);
      res.send(data);
    }
  });
};

module.exports.getCategoryCardsCount = async (req, res) => {
  const categoryName: string = req.params.categoryName;

  await cardsNames.find({ category: categoryName }, (err, data) => {
    if (err) console.log("get count error, ", err);
    else {
      const count: number = data.length;
      console.log("count, ", data);
      res.send(String(count));
    }
  });
};

module.exports.deleteCategory = async (req, res) => {
  const categoryName: string = req.params.categoryName;

  await categoriesNames.deleteOne({ name: categoryName }, (err, data) => {
    try {
      console.log("category was successfully deleted, ", data);
      cloudinary.uploader.destroy(categoryName, function (result) {
        console.log(result);
      });
      res.status(201).json(data);
    } catch {
      console.log("delete category error, ", err);
    }
  });
  await cardsNames.deleteMany({category: categoryName}, (err, data) => {
    try {
      console.log("successfully delete cards", data);
      res.status(201).json(data);
    } catch {
      console.log("delete cards err, ", err);
    }
  })
};

module.exports.updateCategory = async (req, res) => {
  let newSettings = {};
  const categoryName = req.body.oldName;
  let url;

  if (req.file) {
    cloudinary.uploader.destroy(categoryName, result => result);
    url = await cloudinary.uploader.upload(
      path.resolve(`uploads/images/${req.file.filename}`),
      { public_id: categoryName },
      async (err, data) => {
        if (err) console.log("Cloudinary error, ", err);
        else {
          console.log("Cloudinary saved, ", data);
          return data;
        }
      }
    );
    newSettings["imgSrc"] = url.secure_url ;
  }
  if (req.body.newName) newSettings["name"] = req.body.newName;

  await categoriesNames.updateOne(
    { name: categoryName },
    newSettings,
    (err, data) => {
      if (err) console.log("update category err, ", err);
      else {
        console.log("category was updated! ", data);
      }
    }
  );

  await cardsNames.updateMany({category: categoryName}, {category: req.body.newName}, (err, data) => {
    try {
      console.log("successfully updated, ", data);
    } catch {
      console.log("update err", err);
    }
  })

  res.end();
};

module.exports.deleteCard = async (req, res) => {
  console.log(req.params)
  const cardName: string = req.params.cardName;
  const categoryName = req.params.categoryName;

  await cardsNames.deleteOne({ cardName: cardName,  category: categoryName }, (err, data) => {
    try {
      console.log("category was successfully deleted, ", data);
      cloudinary.uploader.destroy(`${cardName}_sound`, function (result) {
        console.log(result);
      });
      cloudinary.uploader.destroy(`${cardName}image`, function (result) {
        console.log(result);
      });
      res.status(201).json(data);
    } catch {
      console.log("delete category error, ", err);
    }
  });
}

module.exports.updateCard = async (req, res) => {
  const settings = {};
  const oldCardName: string = req.body.oldName;
  const category: string = req.body.category;

  const newCardName: string = req.body.newName;
  const newTranslate: string = req.body.translate;
  const files = req.files;

  let newImgSrc;
  let newSoundSrc;
  if (files[0].mimetype.startsWith("image")) newImgSrc = files[0];
  else newImgSrc = files[1];
  if (files[0].mimetype.startsWith("audio")) newSoundSrc = files[0];
  else newSoundSrc = files[1];

  console.log(newImgSrc)

  if (newCardName) settings["cardName"] = newCardName;
  if (newTranslate) settings["translate"] = newTranslate;
  if (newImgSrc) {
    cloudinary.uploader.destroy(`${oldCardName}_image`, result => result);
    await cloudinary.uploader.upload(
      path.resolve(`uploads/images/${newImgSrc.filename}`),
      { public_id: `${newCardName}_image` },
      async (err, data) => {
        if (err) console.log("Cloudinary error, ", err);
        else {
          console.log("Cloudinary saved, ", data);
          settings["imgSrc"] = data.secure_url
        }
      }
    );
  }
  if (newSoundSrc) {
    cloudinary.uploader.destroy(`${oldCardName}_sound`, result => result);
    await cloudinary.uploader.upload(
      path.resolve(`uploads/sounds/${newSoundSrc.filename}`),
      { resource_type: "auto", public_id: `${newCardName}_sound` },
      async (err, data) => {
        if (err) console.log("Cloudinary error, ", err);
        else {
          console.log("Cloudinary saved, ", data);
          settings["soundSrc"] = data.secure_url
        }
      }
    );
  }

  console.log("setting", settings);
  await cardsNames.updateOne({cardName: oldCardName, category: category}, settings, (err, data) => {
    try {
      console.log("card successfully updated, ", data);
      res.send(data);
    } catch {
      console.log("update card error, ", err);
    }
  })
}
