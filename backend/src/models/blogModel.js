const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: [200, "Maximum length for the TITLE is 200!"],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Blog post must belong to a USER!"],
    },
    datePublished: {
      type: Date,
      default: Date.now,
    },
    photoLink: {
      type: String,
      required: [true, "Blog PHOTO LINK is required!"],
    },
    // tags: {
    //   type: String,
    //   enum: ["Education", "Politcs", "Standard", "Enterprise"],
    //   required: [true, "Blog TAGS is required!"],
    // },
    description: {
      type: String,
      required: [true, "Blog DESCRIPTION is required!"],
      minlength: [10, "Minimum length for the DESCRIPTION is 10"],
    },
    body: {
      type: String,
      required: [true, "Blog BODY is required!"],

      minlength: [100, "Minimum length for the BODY is 100"],
    },
  },
  { versionKey: false }
);

const Blogs = mongoose.model("Blogs", BlogSchema, "Blogs");

module.exports = Blogs;
