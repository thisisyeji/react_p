import Layout from '../common/Layout';
import { useState } from 'react';
import { isValidElement } from 'react/cjs/react.production.min';

function Members() {
	const initVal = {
		userid: '',
	};
	const [Val, setVal] = useState(initVal);
	const [Err, setErr] = useState({});

	// input 값을 Val state에 저장하는 함수
	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...Val, [name]: value });
	};

	// 인증 처리 함수
	const check = (value) => {
		const errs = {};

		if (value.userid.length < 5) {
			errs.userid = 'ID를 5글자 이상 입력하세요.';
		}

		return errs;
	};

	// submit 이벤트 실행 함수
	const handleSubmit = (e) => {
		e.preventDefault();
		setErr(check(Val));
	};

	return (
		<Layout name={'Members'}>
			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend className='hidden'>join</legend>
					<table>
						<caption className='hidden'>Join</caption>

						<tbody>
							{/* user id */}
							<tr>
								<th scope='row'>
									<label htmlFor='userid'>USER ID</label>
								</th>
								<td>
									<input
										type='text'
										name='userid'
										id='userid'
										placeholder='ID를 입력하세요.'
										onChange={handleChange}
									/>
									<span className='err'>{Err.userid}</span>
								</td>
							</tr>

							{/* buttons */}
							<tr>
								<th colSpan='2'>
									<input type='reset' value='CANCEL' />
									<input type='submit' value='SUBMIT' />
								</th>
							</tr>
						</tbody>
					</table>
				</fieldset>
			</form>
		</Layout>
	);
}

export default Members;
