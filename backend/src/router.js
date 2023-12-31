const express = require("express");
const multer = require("multer");

const router = express.Router();

const upload = multer({ dest: "./public/uploads/" });
const uploadFile = require("./services/uploadFile");
const refProductsControllers = require("./controllers/refProductsControllers");
const stockProductsControllers = require("./controllers/stockProductsControllers");
const mailControllers = require("./controllers/mailControllers");
const brandsControllers = require("./controllers/brandsControllers");
const modelsControllers = require("./controllers/modelsControllers");
const osControllers = require("./controllers/osControllers");
const ramControllers = require("./controllers/ramControllers");
const stateControllers = require("./controllers/stateControllers");
const storageControllers = require("./controllers/storagesControllers");
const categoriesControllers = require("./controllers/categoriesControllers");
const locationsControllers = require("./controllers/locationsControllers");
const commentsControllers = require("./controllers/commentsControllers");

const usersControllers = require("./controllers/usersControllers");
const {
  hashPassword,
  verifyPassword,
  // verifyToken,
} = require("./services/auth");

router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.put("/users/:id", hashPassword, usersControllers.edit);
router.post("/login", usersControllers.getUserByEmail, verifyPassword);
router.post("/users", hashPassword, usersControllers.add);
router.delete("/users/:id", usersControllers.destroy);

router.get("/comments", commentsControllers.browse);

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
router.get("/brands", brandsControllers.browse);
router.get("/models", modelsControllers.browse);

router.get("/brands", brandsControllers.browse);
router.get("/models", modelsControllers.browse);
router.get("/locations", locationsControllers.browse);

router.post("/stock_products", stockProductsControllers.add);
router.put("/ref_products/:id", refProductsControllers.edit);
router.post("/ref_products", refProductsControllers.add);
router.delete("/ref_products/:id", refProductsControllers.destroy);

router.post("/comments", commentsControllers.add);
router.post("/api/image", upload.single("photo"), uploadFile.postFile);

router.put("/stock_products/:id", stockProductsControllers.edit);
router.delete("/stock_products/:id", stockProductsControllers.destroy);
router.post("/brands", brandsControllers.add);

router.post("/models", modelsControllers.add);
// router.use(verifyToken);

module.exports = router;
