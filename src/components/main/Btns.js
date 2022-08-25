import Anime from '../../assets/Anime';
import { useEffect, useRef } from 'react';

function Btns() {
	const pos = useRef([]);
	const btnRef = useRef(null);
	const speed = 500;
	const num = 5;

	// 세로 스크롤 위치값 구하는 함수
	const getPos = () => {
		pos.current = [];
		const sections = btnRef.current.parentElement.querySelectorAll('.myScroll');
		for (const sec of sections) pos.current.push(sec.offsetTop);
	};

	// 스크롤시 버튼 활성화
	const activation = () => {
		// 변수 base로 버튼 활성화 지점 커스터마이징
		const base = -window.innerHeight / 2;

		const scroll = window.scrollY;
		const btns = btnRef.current.children;
		const sections = btnRef.current.parentElement.querySelectorAll('.myScroll');

		pos.current.map((pos, idx) => {
			if (scroll >= pos + base) {
				for (const btn of btns) btn.classList.remove('on');
				for (const sec of sections) sec.classList.remove('on');
				btns[idx].classList.add('on');
				sections[idx].classList.add('on');
			}
		});
	};

	useEffect(() => {
		btnRef.current.children[0].classList.add('on');
		btnRef.current.parentElement
			.querySelectorAll('.myScroll')[0]
			.classList.add('on');

		getPos();

		// 브라우저 리사이즈시 offsetTop값 가져오는 함수 실행
		// 브라우저 스크롤시 버튼 활성화 함수 실행
		window.addEventListener('resize', getPos);
		window.addEventListener('scroll', activation);

		// 함수 삭제
		return () => {
			window.removeEventListener('resize', getPos);
			window.removeEventListener('scroll', activation);
		};
	}, []);

	return (
		<ul className='scroll_nav' ref={btnRef}>
			{Array(num)
				.fill()
				.map((_, idx) => {
					return (
						<li
							key={idx}
							onClick={() => {
								new Anime(window, {
									prop: 'scroll',
									value: pos.current[idx],
									duration: speed,
								});
							}}></li>
					);
				})}
		</ul>
	);
}

export default Btns;
