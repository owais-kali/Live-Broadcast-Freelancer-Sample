import { Application } from 'express';
import Locals from './Locals';

import webRouter from './../routes/Web';

class Routes {
	public mountWeb(_express: Application): Application {

		return _express.use('/', webRouter);
	}
}

export default new Routes;
