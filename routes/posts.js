const express = require("express");
const {
  getOnePost,
  getAllPosts,
  editPost,
  deleteAllPosts,
  deletePost,
  postPost
} = require("../controllers/posts");
const router = express.Router();

router.route("/").get(getAllPosts).post(postPost).delete(deleteAllPosts);
router.route("/:id").get(getOnePost).delete(deletePost).put(editPost);

module.exports = router;
