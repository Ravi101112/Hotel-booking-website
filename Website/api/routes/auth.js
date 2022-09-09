import express from "express";
import { login, register } from "../controllers/auth.js";

const router = express.Router();

router.post("localhost:8800/api/register", register)
router.post("localhost:8800/api/login", login)

export default router