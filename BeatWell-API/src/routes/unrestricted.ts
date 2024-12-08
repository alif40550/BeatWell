import { Router } from 'express';
import authenticatedRoute from './restricted';
import { signIn, signUp } from '../controllers/authController';
// import { logger } from '../libs/logger';

const router = Router();
// logger.info('Balya coba logging!');
// logger.info('===============================================');
// logger.info('Ini info');
// logger.warn('Ini warn');
// logger.error('Ini error');


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
