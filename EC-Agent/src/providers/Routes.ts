import { Application } from 'express';

import VmixProxy from '../../../EC-Agent/src/routes/VmixProxy'

class Routes {
	public mountVmixProxy(_express: Application): Application {
		const proxyPrefix = Locals.config().proxyPrefix;
		Log.info('Routes :: Mounting VmixProxy Routes...');

		return _express.use(`/${proxyPrefix}`, VmixProxy);
	}
}

export default new Routes;
