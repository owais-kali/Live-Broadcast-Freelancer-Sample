import { Router } from 'express';
import {PCOB_Dummy} from '../controllers/PCOB-dummy';

const router = Router();

router.get('/start', PCOB_Dummy.start);
router.get('/stop', PCOB_Dummy.stop);

router.post('/update/gettotalplayerlist', PCOB_Dummy.update_gettotalplayerlist);

export default router;
