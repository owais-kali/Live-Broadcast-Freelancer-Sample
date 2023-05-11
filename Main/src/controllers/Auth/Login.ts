import {
	IRequest, IResponse, INext
} from '../../interfaces/vendors';

class Login {
	public static show (req: any, res: any): any {
		return res.render('pages/login', {
			title: 'LogIn'
		});
	}
}

export default Login;