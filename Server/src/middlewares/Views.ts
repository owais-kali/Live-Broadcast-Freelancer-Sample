import * as path from 'path';
import { Application } from 'express';

class Views {
	public static mount(_express: Application): Application {

		_express.set('view engine', 'pug');
		_express.set('view options', { pretty: true });
		_express.set('views', path.join(__dirname, '../../views'));
		_express.locals.pretty = true;

		return _express;
	}
}

export default Views;
