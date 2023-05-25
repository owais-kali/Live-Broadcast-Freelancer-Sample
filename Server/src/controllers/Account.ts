import { IRequest, IResponse } from '../interfaces/vendors';

class Account {
	public static index (req: any, res: any): void {
		return res.render('pages/dashboard', {
			title: 'Home'
		});
	}
}

export default Account;
