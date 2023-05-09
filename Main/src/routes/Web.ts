import { Router } from 'express';
import LoginController from '../countrollers/Auth/Login';

const router = Router();

router.get('/login', LoginController.show);

export default router;