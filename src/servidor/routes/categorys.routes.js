import { Router } from "express";
const router = Router();
import {
  getCategorys,
  createCategorys,
  updateCategorys,
  deleteCategorys,
  getCategoryId,
  taskByCategorys,
} from "../controllers/projects.controllers.js";

router.get("/categorys", getCategorys);
router.post("/categorys", createCategorys);
router.put("/categorys/:id", updateCategorys);
router.delete("/categorys/:id", deleteCategorys);
router.get("/categorys/:id", getCategoryId);

router.get("/categorys/:id/tasks", taskByCategorys);

export default router;
