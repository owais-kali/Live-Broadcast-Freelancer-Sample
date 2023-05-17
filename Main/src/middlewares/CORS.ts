/**
 * Enables the CORS
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import cors from 'cors';
import { Application } from 'express';

import Log from './Log';
import Locals from '../providers/Locals';

class CORS {
	public mount(_express: Application): Application {
		Log.info('Booting the \'CORS\' middleware...');

		const options = {
			origin: Locals.config().url,
			optionsSuccessStatus: 200		
		};

		_express.use(cors());

		return _express;
	}
}

export default new CORS;
