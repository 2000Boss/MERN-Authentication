const express = reqiure("express");
const blogController = require("../controllers/blogController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(blogController.getOverview)
  .post(authController.protect, blogController.createBlog);

router.use(authController.protect);

router
  .route("/:id")
  .patch(blogController.updateBlog)
  .delete(blogController.deleteBlog);

module.exports = router;
