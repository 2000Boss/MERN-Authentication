const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: [200, "Maximum length for the title is 200"],
  },
  author: {
    type: String,
    required: true,
  },
  datePublished: {
    type: Date,
    default: Date.now,
  },
  photoLink: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: [10, "Minimum length for the description is 10"],
  },
  body: {
    type: String,
    required: true,
    minlength: [100, "Minimum length for the description is 100"],
  },
  __v: { type: Number, select: false },
});

const Blogs = mongoose.model("Blogs", BlogSchema, "Blog");

module.exports = Blogs;
