import Anime from '../../assets/Anime';
import { useEffect, useRef } from 'react';

function Pics() {
	const path = process.env.PUBLIC_URL;

	const pos = useRef([]);
	const box = useRef([]);

	const getPos = () => {
		pos.current = [];
		const divs = box.current.querySelectorAll('.product');
		for (const div of divs) {
			pos.current.push(div.getBoundingClientRect().top + window.pageYOffset); // 절대값 구하기
		}
		// console.log(pos.current);
	};

	const activation = () => {
		const base = -window.innerHeight / 3;
		const scroll = window.scrollY;
		const divs = box.current.querySelectorAll('.product');
		pos.current.map((pos, idx) => {
			if (scroll >= pos + base) {
				for (const div of divs) div.classList.remove('on');
				divs[idx].classList.add('on');

				// console.log(scroll);
				// console.log(pos + base);
			}
		});
	};

	useEffect(() => {
		const divs = box.current.querySelectorAll('.product');
		for (const div of divs) div.classList.remove('on');

		getPos();

		window.addEventListener('resize', getPos);
		window.addEventListener('scroll', activation);

		// 함수 삭제
		return () => {
			window.removeEventListener('resize', getPos);
			window.removeEventListener('scroll', activation);
		};
	}, []);

	return (
		<section id='Pics' className='myScroll' ref={box}>
			<h2>
				<span>MAGNOLIA INFINITA</span>
				<span>MAGNOLIA INFINITA</span>
				<span>MAGNOLIA INFINITA</span>
			</h2>

			<div className='start'>
				<div className='img'>
					<img src={path + '/img/f1.jpg'} />
				</div>

				<p>
					Signatures of the Sun welcomes the new Magnolia Infinita, a continuous
					blossoming of wonders that never ceases to amaze
				</p>
			</div>

			<div className='product fragrance'>
				<div className='img'>
					<img src={path + '/img/f2.jpg'} />
				</div>
				<div className='detail'>
					<h3>NATURAL SPRAY</h3>
					<p>
						This new fragrance is an artistic combination of two olfactive
						sensations: the infinite floral scent of Magnolia and vibrant
						luminous citrus notes. The elegant and floral scent of this powerful
						flower is combined with top notes of Calabrian Bergamot, Orange, and
						Lemon to introduce vivid rays of light to the fascinating and fresh
						appeal of the Magnolia flower.
					</p>
					<button>
						<a href='#'>MORE</a>
					</button>
				</div>
			</div>

			<div className='product home'>
				<div className='img'>
					<img src={path + '/img/home.jpg'} />
				</div>
				<div className='detail'>
					<h3>HOME COLLECTION</h3>
					<p>
						A collection of five unique sculptures represents the Signatures of
						the Sun ingredients in tangible forms, bringing to life the art of
						sophisticated home scenting.
					</p>
					<button>
						<a href='#'>MORE</a>
					</button>
				</div>
			</div>

			<div className='product body'>
				<div className='img'>
					<img src={path + '/img/body.jpg'} />
				</div>
				<div className='detail'>
					<h3>BODY CARE</h3>
					<p>
						Infused with the flavours of Signatures of the Sun, Acqua di Parma
						has reimagined a new body-care routine that not only leaves a softly
						perfumed trail, but nourishes your emotional senses and cares deeply
						for your skin
					</p>
					<button>
						<a href='#'>MORE</a>
					</button>
				</div>
			</div>
		</section>
	);
}

export default Pics;
