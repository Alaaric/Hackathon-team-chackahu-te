const express = require("express");

const router = express.Router();

const usersControllers = require("./controllers/usersControllers");
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth");

router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.put("/users/:id", verifyToken, hashPassword, usersControllers.edit);
router.post("/login", usersControllers.getUserByEmail, verifyPassword);
router.post("/users", hashPassword, usersControllers.add);
router.delete("/users/:id", verifyToken, usersControllers.destroy);

module.exports = router;
