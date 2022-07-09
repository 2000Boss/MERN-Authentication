const BlogModel = require("../models/blogModel");
const controlMiddleware = require("./controlMiddleware");

exports.getOverview = controlMiddleware.getAll(BlogModel);
exports.createBlog = controlMiddleware.createOne(BlogModel);
exports.updateBlog = controlMiddleware.updateOne(BlogModel);
exports.deleteBlog = controlMiddleware.deleteOne(BlogModel);
