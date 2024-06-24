import express from "express";
import { userSignup, userLogin, userInfo } from "../controllers/user.js";
import { checkLogin } from "../middleware/checkLogin.js";

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.get("/users", checkLogin, userInfo);

export default router;