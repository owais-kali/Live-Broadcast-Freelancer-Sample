import { Application } from 'express';

import Views from './Views';

class Kernel {
	public static init (_express: Application): Application {

		return _express;
	}
}

export default Kernel;