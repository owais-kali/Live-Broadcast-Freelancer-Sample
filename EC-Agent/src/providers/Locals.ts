import { Application } from 'express';
import * as path from 'path';

class Locals {
	/**
	 * Makes env configs available for your app
	 * throughout the app's runtime
	 */
	public static config() {
		const port: number = 4041;
		const url = process.env.APP_URL || `http://localhost:`+port;

		const apiPrefix = process.env.API_PREFIX || 'api';
		const proxyPrefix = 'proxy';

		const maxUploadLimit = process.env.APP_MAX_UPLOAD_LIMIT || '50mb';
		const maxParameterLimit: number = 50;
		const isCORSEnabled = process.env.CORS_ENABLED || true;

		return {
			port,
			url,
			apiPrefix,
			proxyPrefix,
			maxUploadLimit,
			maxParameterLimit,
			isCORSEnabled
		};
	}

	/**
	 * Injects your config to the app's locals
	 */
	public static init (_express: Application): Application {
		_express.locals.app = this.config();
		return _express;
	}
}

export default Locals;
