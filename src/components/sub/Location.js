import Layout from '../common/Layout';
import { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Location() {
	const box = useRef(null);

	// faqs
	const faqs = [
		{
			question: 'HOW LONG DO YOUR PRODUCTS LAST?',
			answer:
				'All our fragrances last more than 30 months if they are kept in their boxes away from direct sunlight or heat. If products are stored correctly, they will last the designated shelf-life.',
		},
		{
			question: 'WHERE ARE ACQUA DI PARMA PRODUCTS MADE?',
			answer:
				'All our products are made in Italy. We are proud of the Italian craftsmanship defining our products, where artisanal traditions have been perpetuated across generations.',
		},
		{
			question: 'ARE YOUR COLOGNES FOR BOTH MEN AND WOMEN?',
			answer:
				'Our colognes, conceived traditionally for a male audience, are perfect for women too.',
		},
	];

	const answerHandle = (index) => {
		const articles = box.current.parentElement.querySelectorAll('article');
		const isOn = articles[index].classList.contains('on');

		if (isOn) {
			articles[index].classList.remove('on');
		} else {
			for (const article of articles) {
				article.classList.remove('on');
			}
			articles[index].classList.add('on');
		}
	};

	// map
	const { kakao } = window;
	const container = useRef(null);

	// info
	const info = [
		{
			title: 'Lotte Dept, JAMSIL',
			latlng: new kakao.maps.LatLng(37.51209474830754, 127.09803057624545),
			address: '1F, 240, Olympic-ro, Songpa-gu, Seoul, Korea',
			tel: '02-2143-1760',
		},
		{
			title: 'Galleria Dept, GANGNAM',
			latlng: new kakao.maps.LatLng(37.52863499288049, 127.04010559011454),
			address: '1F, 343, Apgujeong-ro, Gangnam-gu, Seoul, Korea',
			tel: '02-6905-3568',
		},
		{
			title: 'SSG Dept, GANGNAM',
			latlng: new kakao.maps.LatLng(37.505294469308595, 127.00432598347648),
			address: '1M, 176, Sinbanpo-ro, Seocho-gu, Seoul, Korea',
			tel: '02-3479-1811',
		},
	];

	const [Info, setInfo] = useState(info);
	const [Index, setIndex] = useState(0);

	// 중심좌표
	const opt = {
		center: Info[Index].latlng,
		level: 3,
	};

	// marker image
	const imgSrc = process.env.PUBLIC_URL + '/img/logo_bb.png'; // 마커이미지
	const imgSize = new kakao.maps.Size(50, 50); // 마커이미지 크기
	const imgOpt = { offset: new kakao.maps.Point(15, 0) };

	const markerImg = new kakao.maps.MarkerImage(imgSrc, imgSize, imgOpt);

	// marker
	const marker = new kakao.maps.Marker({
		position: opt.center,
		image: markerImg,
	});

	useEffect(() => {
		// 지도 초기화
		container.current.innerHTML = '';

		const map = new kakao.maps.Map(container.current, opt);
		marker.setMap(map);

		// 지도타입 컨트롤 생성
		const mapTypeControl = new kakao.maps.MapTypeControl();
		map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPLEFT);

		// 줌 컨트롤 생성
		const zoomControl = new kakao.maps.ZoomControl();
		map.addControl(zoomControl, kakao.maps.ControlPosition.LEFT);

		// resize
		const handleResize = () => {
			map.setCenter(Info[Index].latlng);
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [Index]);

	return (
		<Layout name={'Location'}>
			<div className='upper'>
				<div className='email'>
					<h2>Get in touch</h2>
					<form>
						<fieldset>
							<legend className='hidden'>message</legend>
							<table>
								<caption className='hidden'>message</caption>
								<tbody>
									<tr>
										<th scope='row'>
											<label htmlFor='name'>Name</label>
										</th>
										<td>
											<input type='text' id='name' name='name' />
										</td>
									</tr>

									<tr>
										<th scope='row'>
											<label htmlFor='email'>E-mail</label>
										</th>
										<td>
											<input type='email' name='email' id='email' />
										</td>
									</tr>

									<tr>
										<th scope='row'>Message</th>

										<td>
											<textarea
												name='message'
												id='message'
												cols='30'
												rows='3'></textarea>
										</td>
									</tr>

									<tr>
										<th colSpan='2'>
											<input type='submit' value='SEND' />
										</th>
									</tr>
								</tbody>
							</table>
						</fieldset>
					</form>
				</div>

				<ul className='branch'>
					{Info.map((data, idx) => {
						let on = '';
						Index === idx && (on = 'on');

						return (
							<li key={idx}>
								<h3 onClick={() => setIndex(idx)} className={on}>
									{data.title}
								</h3>
								<p>{data.address}</p>
								<p>
									<FontAwesomeIcon icon={faPhone} />
									{data.tel}
								</p>
							</li>
						);
					})}
				</ul>
			</div>

			<div className='map' ref={container}></div>

			<div className='lower'>
				<h2>Frequently asked questions.</h2>
				<div className='content'>
					{faqs.map((faq, idx) => {
						return (
							<article
								key={idx}
								onClick={() => {
									answerHandle(idx);
								}}
								ref={box}>
								<h3>
									{faq.question}
									<FontAwesomeIcon icon={faAngleDown} />
								</h3>
								<p>{faq.answer}</p>
							</article>
						);
					})}
				</div>
			</div>
		</Layout>
	);
}

export default Location;
