import { Router } from 'express';
import {PCOB_Dummy} from '../controllers/PCOB-dummy';

const router = Router();

router.get('/start', PCOB_Dummy.start);
router.get('/stop', PCOB_Dummy.stop);

router.post('/gettotalplayerlist/update', PCOB_Dummy.update_gettotalplayerlist);
router.get('/gettotalplayerlist/default', PCOB_Dummy.getdefault_gettotalplayerlist);

export default router;
