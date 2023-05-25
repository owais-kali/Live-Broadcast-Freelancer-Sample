import express, { Router } from 'express';

import Cache from '../providers/Cache';

import HomeController from '../controllers/Home';
import AccountController from '../controllers/Account';
import LoginController from '../controllers/Auth/Login';
import Express from 'providers/Express';
import path from 'path';

const router = Router();
const cache = Cache.cache;

router.use('/App', express.static(`D:/Freelancer/ESports/VMix-Nodejs/LIVE-BROADCAST-AUTOMATION/Main/public`))

export default router;