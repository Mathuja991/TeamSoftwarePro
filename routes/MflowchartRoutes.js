import express from "express";
import {
  submitMFlowchart,
  getMFlowchart,
  
  deleteEntry,
  updateEntry,
  getEntryById,
} from "../controllers/mflowchartController.js";

const router = express.Router();

router.post("/submit", submitMFlowchart);
router.get("/", getMFlowchart);
//router.get("/:id", getMFlowchartById);
router.delete('/:id', deleteEntry);
router.put('/entries/:id', updateEntry); // ⬅️ Add this line
router.get('/entries/:id', getEntryById);

export default router;
