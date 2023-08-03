const express = require("express");
const {
  createPost,
  likeUnlikePost,
  getPostsOfFollowing,
  updatePost,
  deletePost,
  addComment,
  deleteComment,
} = require("../controllers/post");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();
router.route("/post/upload").post(isAuthenticated, createPost);
router.route("/post/:id").get(isAuthenticated, likeUnlikePost);
router.route("/post/:id").put(isAuthenticated, updatePost);
router.route("/post/:id").delete(isAuthenticated, deletePost);
router.route("/posts").get(isAuthenticated, getPostsOfFollowing);
router.route("/post/comment/:id").post(isAuthenticated, addComment);
router.route("/post/comment/:id").delete(isAuthenticated, deleteComment);

module.exports = router;
