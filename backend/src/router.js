const express = require("express");

const router = express.Router();

const productsControllers = require("./controllers/productsControllers");
const { verifyToken } = require("./services/auth");

router.get("/products", productsControllers.browse);
router.get("/products/:id", productsControllers.read);

router.use(verifyToken);
router.put("/products/:id", productsControllers.edit);
router.post("/products", productsControllers.add);
router.delete("/products/:id", productsControllers.destroy);

module.exports = router;
