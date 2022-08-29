import Anime from '../../assets/Anime';
import { useRef } from 'react';

function Intro() {
	const path = process.env.PUBLIC_URL;
	const pos = useRef([]);
	const boxRef = useRef(null);

	// 세로 스크롤 위치값 구하는 함수
	const getPos = () => {
		pos.current = [];
		const sections = boxRef.current.parentElement.querySelectorAll('.myScroll');
		for (const sec of sections) pos.current.push(sec.offsetTop);
	};

	return (
		<section id='Intro' className='myScroll' ref={boxRef}>
			<div className='inner'>
				<h2>
					<span className='title_first'>DISCOVER</span>
					<span className='title_second'>THE NEW</span>
					<span className='title_last'>AMAZING FRAGRANCE</span>
				</h2>
				<div className='img_first'>
					<img src={path + '/img/1.jpg'} />
				</div>
				<div className='img_second'>
					<img src={path + '/img/3.jpg'} />
				</div>

				<div
					className='btn'
					onClick={() => {
						getPos();
						new Anime(window, {
							prop: 'scroll',
							value: pos.current[1],
							duration: 500,
						});
					}}>
					Explore
				</div>
			</div>
		</section>
	);
}

export default Intro;
