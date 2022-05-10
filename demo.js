const datefns = require("date-fns");
const { Post, Like, Comment, Share } = require("../models/post");
const auth = require("../middleware/auth");
const uploader = require("../utils/uploader");
const express = require("express");
const router = express.Router();
const asyncHandler = require("../middleware/async");

router.post(
  "/",
  auth,
  asyncHandler(async (req, res, next) => {
    uploader(req, res, next);
    const post = await Post.create({
      author: req.tokenPayload.id,
      date: new Date().toISOString(), // ISO 8601
      text: req.body.text ? req.body.text : "",
      videos: req.body.videos ? JSON.stringify(req.body.videos) : "[]",
      images: req.body.images ? JSON.stringify(req.body.images) : "[]",
    });
    return res.send({ message: "Post created", data: post });
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const post = await Post.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Comment,
          attributes: ["userId", "text"],
        },
        {
          model: Like,
          attributes: ["userId"],
        },
        {
          model: Share,
          attributes: ["userId"],
        },
      ],
    });
    const post1 = JSON.parse(JSON.stringify(post));
    if (post) {
      post1.images = post1.images != "" ? JSON.parse(post1.images) : "";
      post1.videos = post1.videos != "" ? JSON.parse(post1.videos) : "";
      let arrlikes = [];
      let arrshares = [];
      if (post1.likes) {
        for (const like of post1.likes) {
          arrlikes.push(like.userId);
        }
      }
      if (post1.shares) {
        for (const share of post1.shares) {
          arrshares.push(share.userId);
        }
      }
      post1.likes = arrlikes;
      post1.shares = arrshares;

      return res.send(post1);
    } else res.status(404).send({ message: "Not Found" });
  })
);

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const posts = await Post.findAll({
      include: [
        {
          model: Comment,
          attributes: ["userId", "text"],
        },
        {
          model: Like,
          attributes: ["userId"],
        },
        {
          model: Share,
          attributes: ["userId"],
        },
      ],
    });
    //
    let output = [];

    for (const post of posts) {
      let mpost = JSON.parse(JSON.stringify(post));

      mpost.images = mpost.images != "" ? JSON.parse(mpost.images) : "";
      mpost.videos = mpost.videos != "" ? JSON.parse(mpost.videos) : "";
      mpost.date = mpost.date != "" ? mpost.date : "";
      let arrlikes = [];
      let arrshares = [];
      if (mpost.likes) {
        for (const like of mpost.likes) {
          arrlikes.push(like.userId);
        }
      }
      if (mpost.shares) {
        for (const share of mpost.shares) {
          arrshares.push(share.userId);
        }
      }
      mpost.likes = arrlikes;
      mpost.shares = arrshares;
      output.push(mpost);
    }
    return res.send(output);
  })
);

router.post(
  "/like/:id",
  auth,
  asyncHandler(async (req, res, next) => {
    const post = await Post.findOne({ where: { id: req.params.id } });
    if (!post) {
      return res.status(404).send({ message: "Post not Found" });
    }
    const like = await Like.findOne({
      where: { userId: req.tokenPayload.id, postId: req.params.id },
    });
    if (like) {
      await Like.destroy({
        where: { userId: req.tokenPayload.id, postId: req.params.id },
      });
      return res.send({ message: "Post unliked" });
    } else {
      await Like.create({ userId: req.tokenPayload.id, postId: req.params.id });
      return res.send({ message: "Post liked" });
    }
  })
);

router.post(
  "/share/:id",
  auth,
  asyncHandler(async (req, res, next) => {
    const post = await Post.findOne({ where: { id: req.params.id } });
    if (!post) {
      return res.status(404).send({ message: "Post not Found" });
    }
    const share = await Share.findOne({
      where: { userId: req.tokenPayload.id, postId: req.params.id },
    });
    if (share) {
      await Share.destroy({
        where: { userId: req.tokenPayload.id, postId: req.params.id },
      });
      return res.send({ message: "Post unshared" });
    } else {
      await Share.create({
        userId: req.tokenPayload.id,
        postId: req.params.id,
      });
      return res.send({ message: "Post shared" });
    }
  })
);

router.post(
  "/comment/:id",
  auth,
  asyncHandler(async (req, res, next) => {
    const post = await Post.findOne({ where: { id: req.params.id } });
    if (!post) {
      return res.status(404).send({ message: "Post not Found" });
    }
    await Comment.create({
      userId: req.tokenPayload.id,
      text: req.body.text,
      postId: req.params.id,
    });
    return res.status(201).send({ message: "Commented on the post" });
  })
);

module.exports = router;
