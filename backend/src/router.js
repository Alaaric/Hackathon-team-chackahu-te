const express = require("express");

const router = express.Router();

const refProductsControllers = require("./controllers/refProductsControllers");
const stockProductsControllers = require("./controllers/stockProductsControllers");
const mailControllers = require("./controllers/mailControllers");
const osControllers = require("./controllers/osControllers");
const ramControllers = require("./controllers/ramControllers");
const stateControllers = require("./controllers/stateControllers");
const storageControllers = require("./controllers/storagesControllers");
const categoriesControllers = require("./controllers/categoriesControllers");

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

router.get("/ref_products", refProductsControllers.browse);
router.get("/ref_products/:id", refProductsControllers.read);

router.get("/stock_products", stockProductsControllers.browse);
router.get("/stock_products/:id", stockProductsControllers.read);

router.post("/test", mailControllers.sendMailById);
router.put("/resetpassword", hashPassword, usersControllers.editUserPassword);
router.get("/os", osControllers.browse);
router.get("/rams", ramControllers.browse);
router.get("/storage", storageControllers.browse);
router.get("/state", stateControllers.browse);
router.get("/categories", categoriesControllers.browse);

router.use(verifyToken);
router.put("/ref_products/:id", refProductsControllers.edit);
router.post("/ref_products", refProductsControllers.add);
router.delete("/ref_products/:id", refProductsControllers.destroy);

router.put("/stock_products/:id", stockProductsControllers.edit);
router.post("/stock_products", stockProductsControllers.add);
router.delete("/stock_products/:id", stockProductsControllers.destroy);

module.exports = router;
