const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const question = require("./models/question");
const score = require("./models/score");
const app = express();
const PORT = process.env.PORT || 5000; // Set your desired port number

app.use(bodyParser.json());
app.use(cors());
const uri = process.env.MONGO_URI;
// Connect to MongoDB Atlas
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error(err));
app.post("/many-questions", (req, res) => {
  const questions = req.body.questions;
  question.insertMany(questions);
  res.send("done");
});

app.get("/questions", async (req, res) => {
  console.log("here");
  const questions = await question.find({});
  questions.sort(() => Math.random() - 0.5);
  res.json(questions.slice(0, 40));
});

app.post("/score", async (req, res) => {
  const scoreData = req.body;
  const newScore = new score({
    score: scoreData.score,
    responses: scoreData.responses,
  });
  await newScore.save();
});
// Define your API routes and middleware here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
