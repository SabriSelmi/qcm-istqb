const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: String,
  image: String,
  options: [
    new mongoose.Schema({
      rep: String,
      correct: Boolean,
      tag: String,
    }),
  ],
});

const question = mongoose.model("question", questionSchema);

module.exports = question;
