import { Router } from 'express';
import {VmixProxy} from '../controllers/VmixProxy/VmixProxy'

const router = Router();

router.post('/', VmixProxy.perform);

export default router;
