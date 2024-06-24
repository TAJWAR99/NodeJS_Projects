import express from "express";
import {checkAuth} from "../middlewares/auth.js";
import { userInfo, userSignUp, userSignIn } from "../controllers/user.js";

const router = express.Router();

router.get("/", checkAuth, userInfo);
router.post("/signup", userSignUp);
router.post("/signin", userSignIn);

export default router; 