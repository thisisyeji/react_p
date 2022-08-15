import Layout from '../common/Layout';
import { useState } from 'react';
import { isValidElement } from 'react/cjs/react.production.min';

function Members() {
	const initVal = {
		userid: '',
		email: '',
		pwd1: '',
		pwd2: '',
		gender: null,
	};
	const [Val, setVal] = useState(initVal);
	const [Err, setErr] = useState({});

	// 인증 처리 함수
	const check = (value) => {
		const errs = {};

		// pwd 정규식
		const num = /[0-9]/;
		const eng = /[a-zA-Z]/;
		const spc = /[~!@#$%^&*()_+\[]/;

		if (value.userid.length < 5) {
			errs.userid = '아이디를 5글자 이상 입력하세요.';
		}

		if (value.email.length < 6 || !/@/.test(value.email)) {
			errs.email = '이메일을 @를 포함하여 입력하세요.';
		}

		if (
			value.pwd1.length < 5 ||
			!num.test(value.pwd1) ||
			!eng.test(value.pwd1) ||
			!spc.test(value.pwd1)
		) {
			errs.pwd1 =
				'비밀번호를 5글자 이상 숫자, 영문자, 특수문자를 모두 포함하여 입력하세요.';
		}

		if (value.pwd1 !== value.pwd2 || !value.pwd2) {
			errs.pwd2 = '비밀번호를 동일하게 입력하세요.';
		}

		if (!value.gender) {
			errs.gender = '성별을 선택하세요.';
		}

		return errs;
	};

	// submit 이벤트 실행 함수
	const handleSubmit = (e) => {
		e.preventDefault();
		setErr(check(Val));
	};

	// input 값을 Val state에 저장하는 함수
	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...Val, [name]: value });
	};

	// gender 인풋 전용 함수
	const handleRadio = (e) => {
		const { name } = e.target;
		const isCheck = e.target.checked;
		setVal({ ...Val, [name]: isCheck });
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
										placeholder='아이디를 입력하세요.'
										onChange={handleChange}
									/>
									<span className='err'>{Err.userid}</span>
								</td>
							</tr>

							{/* pwd */}
							<tr>
								<th scope='row'>
									<label htmlFor='pwd1'>PASSWORD</label>
								</th>

								<td>
									<input
										type='password'
										name='pwd1'
										id='pwd1'
										placeholder='비밀번호를 입력하세요.'
										onChange={handleChange}
									/>
									<span className='err'>{Err.pwd1}</span>
								</td>
							</tr>

							<tr>
								<th scope='row'>
									<label htmlFor='pwd2'>RE-PASSWORD</label>
								</th>

								<td>
									<input
										type='password'
										name='pwd2'
										id='pwd2'
										placeholder='비밀번호를 재입력하세요.'
										onChange={handleChange}
									/>
									<span className='err'>{Err.pwd2}</span>
								</td>
							</tr>

							{/* email */}
							<tr>
								<th scope='row'>
									<label htmlFor='email'>E-MAIL</label>
								</th>
								<td>
									<input
										type='text'
										name='email'
										id='email'
										placeholder='이메일을 입력하세요.'
										onChange={handleChange}
									/>
									<span className='err'>{Err.email}</span>
								</td>
							</tr>

							{/* gender */}
							<tr>
								<th>GENDER</th>

								<td>
									<input
										type='radio'
										name='gender'
										id='male'
										onChange={handleRadio}
									/>
									<label htmlFor='male'>MALE</label>

									<input
										type='radio'
										name='gender'
										id='female'
										onChange={handleRadio}
									/>
									<label htmlFor='female'>FEMALE</label>

									<span className='err'>{Err.gender}</span>
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
