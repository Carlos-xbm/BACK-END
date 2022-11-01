const router = require("express").Router();
const userController = require("../controllers/users");

router.post("/create-user", userController.createUserController);
router.get("/all-users", userController.allUserController);

module.exports = router;
