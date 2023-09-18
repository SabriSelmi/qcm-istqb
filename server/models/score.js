const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema(
  {
    score: Number,
    responses: [],
  },
  { timestamps: true }
);

const score = mongoose.model("score", scoreSchema);

module.exports = score;
