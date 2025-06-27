import express from 'express';
import {
  getAllChildren,
  getChildByChildNo,
  createChild,
  updateChild,
  deleteChild
} from '../controllers/childController.js';

const router = express.Router();

router.get('/', getAllChildren);
router.get('/:childNo', getChildByChildNo);
router.post('/', createChild);
router.put('/:childNo', updateChild);
router.delete('/:childNo', deleteChild);

export default router;
