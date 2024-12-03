import { Router } from 'express';
import authenticatedRoute from './restricted';
import { signIn, signUp } from '../controllers/authController';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Express + TypeScript Server!',
    error: false,
  });
});

router.post('/login', signIn);
router.post('/register', signUp);

router.use(authenticatedRoute);

export default router;
