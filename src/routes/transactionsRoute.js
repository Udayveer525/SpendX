import express from 'express';
import { sql } from '../config/db.js';
import { getSummaryByUserId, deleteTransaction, createTransaction, getTransactionsByUserId } from '../controllers/transactionsController.js';

const router = express.Router();

// Routes
router.get('/summary/:userId', getSummaryByUserId);

router.get('/:userId', getTransactionsByUserId);

router.post('/', createTransaction);

router.delete('/:id', deleteTransaction);

export default router;