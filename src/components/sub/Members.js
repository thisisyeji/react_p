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
		country: '',
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
			errs.userid = '* Use 5 or more characters.';
		}

		if (value.email.length < 6 || !/@/.test(value.email)) {
			errs.email = '* Make sure your email address is correct.';
		}

		if (
			value.pwd1.length < 5 ||
			!num.test(value.pwd1) ||
			!eng.test(value.pwd1) ||
			!spc.test(value.pwd1)
		) {
			errs.pwd1 =
				'* Use 5 or more characters with a mix of letters, numbers & symbols.';
		}

		if (value.pwd1 !== value.pwd2 || !value.pwd2) {
			errs.pwd2 = '* Enter the same password again.';
		}

		if (!value.gender) {
			errs.gender = '* Choose your gender.';
		}

		if (!value.interests) {
			errs.interests = '* Choose all your interests.';
		}

		if (value.country === '') {
			errs.country = '* Select the Country of residence.';
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
			alert('Congraturations! Now you are a member of Acqua di Parma.');

			history.push('/');
		}
	}, [Err]);

	return (
		<Layout name={'Members'}>
			<h2>Sign up now!</h2>
			<div className='box'>
				<div className='logo'>
					<img src={process.env.PUBLIC_URL + '/img/logo_img.png'} alt='' />
				</div>

				<form onSubmit={handleSubmit}>
					<fieldset>
						<legend className='hidden'>join</legend>
						<table>
							<caption className='hidden'>Join</caption>

							<tbody>
								{/* user id */}
								<tr>
									<th scope='row'>
										<label htmlFor='userid'>ID</label>
									</th>
									<td>
										<input
											type='text'
											name='userid'
											id='userid'
											placeholder='Enter your ID.'
											maxLength={15}
											onChange={handleChange}
										/>
										<span className='err'>{Err.userid}</span>
									</td>
								</tr>

								{/* pwd */}
								<tr>
									<th scope='row'>
										<label htmlFor='pwd1'>Password</label>
									</th>

									<td>
										<input
											type='password'
											name='pwd1'
											id='pwd1'
											placeholder='Enter your Password.'
											maxLength={15}
											onChange={handleChange}
										/>
										<span className='err'>{Err.pwd1}</span>
									</td>
								</tr>

								<tr>
									<th scope='row'>
										<label htmlFor='pwd2'>Confirm Password</label>
									</th>

									<td>
										<input
											type='password'
											name='pwd2'
											id='pwd2'
											placeholder='Confirm your Password.'
											maxLength={15}
											onChange={handleChange}
										/>
										<span className='err'>{Err.pwd2}</span>
									</td>
								</tr>

								{/* email */}
								<tr>
									<th scope='row'>
										<label htmlFor='email'>E-mail</label>
									</th>
									<td>
										<input
											type='text'
											name='email'
											id='email'
											placeholder='Enter your E-mail.'
											maxLength={50}
											onChange={handleChange}
										/>
										<span className='err'>{Err.email}</span>
									</td>
								</tr>

								{/* gender */}
								<tr>
									<th scope='row'>Gender</th>

									<td>
										<label htmlFor='male'>
											<input
												type='radio'
												name='gender'
												id='male'
												onChange={handleRadio}
											/>
											Male
										</label>

										<label htmlFor='female'>
											<input
												type='radio'
												name='gender'
												id='female'
												onChange={handleRadio}
											/>
											Female
										</label>

										<span className='err'>{Err.gender}</span>
									</td>
								</tr>

								{/* interests */}
								<tr>
									<th scope='row'>Interests</th>

									<td>
										<label htmlFor='fragrances'>
											<input
												type='checkbox'
												name='interests'
												id='fragrances'
												onChange={handleCheck}
											/>
											Fragrances
										</label>

										<label htmlFor='bodycare'>
											<input
												type='checkbox'
												name='interests'
												id='bodycare'
												onChange={handleCheck}
											/>
											Body care
										</label>

										<label htmlFor='home'>
											<input
												type='checkbox'
												name='interests'
												id='home'
												onChange={handleCheck}
											/>
											Home collection
										</label>

										<label htmlFor='car'>
											<input
												type='checkbox'
												name='interests'
												id='car'
												onChange={handleCheck}
											/>
											Car diffuser
										</label>

										<span className='err'>{Err.interests}</span>
									</td>
								</tr>

								{/* country */}
								<tr>
									<th scope='row'>
										<label htmlFor='country'>Country</label>
									</th>

									<td>
										<select name='country' id='country' onChange={handleSelect}>
											<option value=''>SELECT ONE</option>
											<option value='korea'>Republic of Korea</option>
											<option value='us'>United States</option>
											<option value='italy'>Italy</option>
											<option value='etc'>Etc.</option>
										</select>

										<span className='err'>{Err.country}</span>
									</td>
								</tr>

								{/* comments */}
								<tr>
									<th scope='row'>
										<label htmlFor='comments'>Comments</label>
									</th>

									<td>
										<textarea
											name='comments'
											id='comments'
											cols='30'
											rows='3'
											placeholder='Please write any comments.'
											maxLength={200}
											onChange={handleChange}></textarea>
									</td>
								</tr>

								{/* buttons */}
								<tr>
									<th colSpan='2'>
										<input type='reset' value='CANCEL' />
										<input
											type='submit'
											value='SIGN UP'
											onClick={() => setSubmit(true)}
										/>
									</th>
								</tr>
							</tbody>
						</table>
					</fieldset>
				</form>
			</div>
		</Layout>
	);
}

export default Members;
