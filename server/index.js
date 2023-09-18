const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const question = require("./models/question");
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
  res.json(questions);
});
// Define your API routes and middleware here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
