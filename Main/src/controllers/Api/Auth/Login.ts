/**
 * Define Login Login for the API
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import * as jwt from 'jsonwebtoken';

import User from '../../../models/User';
import { config } from 'bluebird';
import Locals from '../../../providers/Locals';

class Login {
	public static perform (req, res): any {
		const _email = req.body.email.toLowerCase();
		const _password = req.body.password;

		User.findOne({email: _email}, (err, user) => {
			if (err) {
				return res.json({
					error: err
				});
			}

			if (! user) {
				return res.json({
					error: ['User not found!']
				});
			}

			if (! user.password) {
				return res.json({
					error: ['Please login using your social creds']
				});
			}

			user.comparePassword(_password, (err, isMatch) => {
				if (err) {
					return res.json({
						error: err
					});
				}

				if (! isMatch) {
					return res.json({
						error: ['Password does not match!']
					});
				}

				const token = jwt.sign(
					{ email: _email, password: _password },
					Locals.config().appSecret,
					{ expiresIn: Locals.config().jwtExpiresIn * 60 }
				);

				// Hide protected columns
				user.tokens = undefined;
				user.password = undefined;

				return res.json({
					user,
					token,
					token_expires_in: Locals.config().jwtExpiresIn * 60
				});
			});
		});
	}
}

export default Login;
