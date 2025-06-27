import express from 'express';
import {
  submitForm,
  getAllEntries,
  getChildByChildNo,
  deleteEntry,
  updateEntry,
  getEntryById, // ⬅️ Import the update controller
} from '../controllers/carsformController.js';

const router = express.Router();

router.post('/submit', submitForm);
router.get('/entries', getAllEntries);
router.get('/child/:childNo', getChildByChildNo);
router.delete('/:id', deleteEntry);
router.put('/entries/:id', updateEntry); // ⬅️ Add this line
router.get('/entries/:id', getEntryById);

export default router;
