const express = require("express");

const router = express.Router();

const productsControllers = require("./controllers/productsControllers");
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
router.get("/products", productsControllers.browse);
router.get("/products/:id", productsControllers.read);

router.use(verifyToken);
router.put("/products/:id", productsControllers.edit);
router.post("/products", productsControllers.add);
router.delete("/products/:id", productsControllers.destroy);

module.exports = router;
