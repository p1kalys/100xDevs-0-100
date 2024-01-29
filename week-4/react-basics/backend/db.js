const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://gibs:1234567890@cluster0.gyiz5tw.mongodb.net/');

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
