const express = require("express");
const {
  getOnePost,
  getAllPosts,
  editPost,
  deletePost,
  postPost
} = require("../controllers/posts");
const router = express.Router();

router.route("/").get(getAllPosts).post(postPost);
router.route("/:id").get(getOnePost).delete(deletePost).put(editPost);

module.exports = router;
