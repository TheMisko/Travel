const { model, Schema } = require("mongoose");

const postSchema = new Schema({
  naziv: String,
  opis: String,
  cena: String,
  slike: [String]
});

module.exports = model("Post", postSchema);
