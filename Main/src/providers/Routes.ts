import { Application } from 'express';
import Locals from './Locals';
import Log from '../middlewares/Log';

import webRouter from './../routes/Web';
import apiRouter from './../routes/Api';
import VmixProxy from './../routes/VmixProxy'

class Routes {
	public mountApi(_express: Application): Application {
		const apiPrefix = Locals.config().apiPrefix;
		Log.info('Routes :: Mounting API Routes...');

		return _express.use(`/${apiPrefix}`, apiRouter);
	}

	public mountVmixProxy(_express: Application): Application {
		const proxyPrefix = Locals.config().proxyPrefix;
		Log.info('Routes :: Mounting VmixProxy Routes...');

		return _express.use(`/${proxyPrefix}`, VmixProxy);
	}

	public mountWeb(_express: Application): Application {

		return _express.use('/', webRouter);
	}
}

export default new Routes;
