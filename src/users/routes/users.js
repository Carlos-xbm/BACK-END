const router = require("express").Router();
const userController = require("../controllers/users");

router.post("/", userController.createUserController);
router.get("/", userController.allUserController);

module.exports = router;
