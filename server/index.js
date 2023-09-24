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
  try {
    const questions = req.body.questions;
    question.insertMany(questions);
    res.send("done");
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/questions", async (req, res) => {
  const regex = new RegExp("ISTQB", "i");
  const questions = await question.find({ question: { $regex: regex } });
  questions.sort(() => Math.random() - 0.5);
  res.json(questions.slice(0, 40));
});

app.post("/score", async (req, res) => {
  const scoreData = req.body;
  const newScore = new score({
    score: scoreData.score,
    responses: scoreData.responses,
  });
  const result = await newScore.save();
  res.json(result);
});

app.get("/score/:id", async (req, res) => {
  const id = req.params.id;
  const result = await score.findById(id);
  res.json(result);
});
// Define your API routes and middleware here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
