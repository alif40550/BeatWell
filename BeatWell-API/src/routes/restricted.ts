import { Router } from 'express';
import { indexRandomFoods, getDetailedFood } from '../controllers/foodController';
import { getActivity } from '../controllers/activityController';
import { accessValidation } from '../middlewares/auth';
import { chat, predictCHD } from '../controllers/modelController';
import { getById, indexUserHistories } from '../controllers/historyController';
import { getTrivia } from '../controllers/triviaController';
import { deleteCurrentUser, updateCurrentUser } from '../controllers/userController';

const router = Router();

router.use(accessValidation);
router.get('/foods', indexRandomFoods);
router.get('/foods/:id', getDetailedFood);
router.get('/activity', getActivity);
router.post('/prediction', predictCHD);
router.post('/chatbot', chat);
router.get('/users/:id/histories', indexUserHistories);
router.get('/histories/:id', getById);
router.get('/trivia', getTrivia);
router.patch('/users', updateCurrentUser);
router.delete('/users', deleteCurrentUser);
router.delete('/histories/:id', getById);

export default router;
