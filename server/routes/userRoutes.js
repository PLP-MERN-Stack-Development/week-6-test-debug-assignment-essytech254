import express from 'express';
import { getStatus, getUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/status', getStatus);
router.get('/:id', getUser);

export default router;
