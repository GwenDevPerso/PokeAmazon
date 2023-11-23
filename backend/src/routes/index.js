import { Router } from "express";
const router = Router();
import controller from "../controllers/index.js";

router.get('/api/all', controller.getAll);

export default router;