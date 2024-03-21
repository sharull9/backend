const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // Handle user-related requests
  res.json({ user: "Hello world 1" });
});
router.get("/user", (req, res) => {
  // Handle user-related requests
  res.json({ user: "Hello world" });
});

export const userRouter = router;
