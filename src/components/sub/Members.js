import Layout from '../common/Layout';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Members() {
	const history = useHistory();

	const [Submit, setSubmit] = useState(false);

	// 기본 빈 객체
	const initVal = {
		userid: '',
		email: '',
		pwd1: '',
		pwd2: '',
		gender: null,
		interests: null,
		edu: '',
		comments: '',
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

		if (!value.interests) {
			errs.interests = '관심사를 하나 이상 선택하세요.';
		}

		if (value.edu === '') {
			errs.edu = '최종학력을 선택하세요.';
		}

		if (value.comments.length < 10) {
			errs.comments = '코멘트를 10글자 이상 입력하세요.';
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

	// radio 인풋 전용 함수
	const handleRadio = (e) => {
		const { name } = e.target;
		const isCheck = e.target.checked;
		setVal({ ...Val, [name]: isCheck });
	};

	// checkbox 인풋 전용 함수
	const handleCheck = (e) => {
		let isCheck = false;
		const { name } = e.target;
		const inputs = e.target.parentElement.querySelectorAll('input');
		inputs.forEach((el) => {
			if (el.checked) isCheck = true;
		});

		setVal({ ...Val, [name]: isCheck });
	};

	// select 인풋 전용 함수
	const handleSelect = (e) => {
		const { name, value } = e.target;
		setVal({ ...Val, [name]: value });
	};

	useEffect(() => {
		const len = Object.keys(Err).length;
		if (len === 0 && Submit) {
			alert('회원가입이 완료되었습니다. 메인페이지로 이동합니다.');

			history.push('/');
		}
	}, [Err]);

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
								<th scope='row'>GENDER</th>

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

							{/* interests */}
							<tr>
								<th scope='row'>INTERESTS</th>

								<td>
									<input
										type='checkbox'
										name='interests'
										id='sports'
										onChange={handleCheck}
									/>
									<label htmlFor='sports'>SPORTS</label>

									<input
										type='checkbox'
										name='interests'
										id='music'
										onChange={handleCheck}
									/>
									<label htmlFor='music'>MUSIC</label>

									<input
										type='checkbox'
										name='interests'
										id='game'
										onChange={handleCheck}
									/>
									<label htmlFor='game'>GAME</label>

									<input
										type='checkbox'
										name='interests'
										id='movie'
										onChange={handleCheck}
									/>
									<label htmlFor='movie'>MOVIE</label>

									<span className='err'>{Err.interests}</span>
								</td>
							</tr>

							{/* edu */}
							<tr>
								<th scope='row'>
									<label htmlFor='edu'>EDUCATION</label>
								</th>

								<td>
									<select name='edu' id='edu' onChange={handleSelect}>
										<option value=''>최종학력을 선택하세요.</option>
										<option value='elementary-school'>초등학교 졸업</option>
										<option value='middle-school'>중학교 졸업</option>
										<option value='high-school'>고등학교 졸업</option>
										<option value='college'>대학교 졸업</option>
									</select>

									<span className='err'>{Err.edu}</span>
								</td>
							</tr>

							{/* comments */}
							<tr>
								<th scope='row'>
									<label htmlFor='comments'>COMMENTS</label>
								</th>

								<td>
									<textarea
										name='comments'
										id='comments'
										cols='30'
										rows='5'
										placeholder='코멘트를 입력하세요'
										onChange={handleChange}></textarea>

									<span className='err'>{Err.comments}</span>
								</td>
							</tr>

							{/* buttons */}
							<tr>
								<th colSpan='2'>
									<input type='reset' value='CANCEL' />
									<input
										type='submit'
										value='SUBMIT'
										onClick={() => setSubmit(true)}
									/>
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
