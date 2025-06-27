import express from 'express';
import {
  submitChecklist,
  getAllEntries,
  deleteEntry,
  updateEntry,
  getEntryById,
} from '../controllers/bcController.js';

const router = express.Router();

router.post('/submit', submitChecklist);
router.get('/',  getAllEntries);
router.delete('/:id', deleteEntry);
router.put('/entries/:id', updateEntry); 

router.get('/entries/:id', getEntryById);
export default router;
