import { Router } from 'express';

import Cache from './../providers/Cache';

import HomeController from '../controllers/Home';
import AccountController from '../controllers/Account';
import LoginController from '../controllers/Auth/Login';

const router = Router();
const cache = Cache.cache;

router.get('/', cache(10), HomeController.index);

router.get('/login', LoginController.show);

router.get('/account', (req: any, res: any, next: any): any=>{console.log("asdwd")}, AccountController.index);

export default router;