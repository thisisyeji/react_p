import Layout from '../common/Layout';
import Popup from '../common/Popup';
import Masonry from 'react-masonry-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as types from '../../redux/actionType';

function Gallery() {
	const dispatch = useDispatch();

	//store에 있는 flickr데이터를 가져옴 (처음 사이클에서는 빈배열  가져옴)
	const Pics = useSelector((store) => store.flickrReducer.flickr);
	// console.log(Pics);

	const [EnableClick, setEnableClick] = useState(false);
	const [Index, setIndex] = useState(0);
	const [Loading, setLoading] = useState(true);
	const frame = useRef(null);
	const btnBox = useRef(null);
	const input = useRef(null);
	const pop = useRef(null);

	//masonry 전환속도 옵션객체 설정
	const masonryOptions = { transitionDuration: '0.7s' };
	const user = '196138805@N05';

	//saga로 전달될 axios호출시 필요한 옵션값이 담길 state
	const [Opt, setOpt] = useState({ type: 'gallery' });

	const btnHandle = (index) => {
		const btns = btnBox.current.querySelectorAll('button');
		for (const btn of btns) {
			btn.classList.remove('on');
		}
		btns[index].classList.add('on');
	};

	const showSearch = () => {
		const result = input.current.value.trim();
		if (!result) return alert('Please enter the keyword.');
		if (!EnableClick) return;
		setLoading(true);
		frame.current.classList.remove('on');
		setOpt({ type: 'search', tag: result });
		setEnableClick(false);
		setTimeout(() => {
			input.current.value = '';
		}, 2000);
	};

	const showGallery = () => {
		if (!EnableClick) return;
		setLoading(true);
		btnHandle(0);
		frame.current.classList.remove('on');
		setOpt({ type: 'gallery' });
		setEnableClick(false);
	};

	const showUser = () => {
		if (!EnableClick) return;
		setLoading(true);
		btnHandle(1);
		frame.current.classList.remove('on');
		setOpt({ type: 'user' });
		setEnableClick(false);
	};

	const showInterest = () => {
		if (!EnableClick) return;
		setLoading(true);
		btnHandle(2);
		frame.current.classList.remove('on');
		setOpt({ type: 'interest' });
		setEnableClick(false);
	};

	const endLoading = () => {
		setTimeout(() => {
			frame.current.classList.add('on');
			setLoading(false);
			setTimeout(() => setEnableClick(true), 600);
		}, 1000);
	};

	//Opt값이 변경될떄마다 dispatch로 변경된 해당 Opt값을 Flickr_start액션객체에 담아서 saga에 전달
	useEffect(() => {
		dispatch({ type: types.FLICKR.start, Opt });
	}, [Opt]);

	//flickr데이터가 변경될때마다 (새로운데이터 요청을 해서 해당 요청이 완료될때마다) 로딩제거함수 호출
	useEffect(endLoading, [Pics]);

	return (
		<>
			<Layout name={'Gallery'}>
				<div className='title'>
					<h2>Find your interest</h2>
				</div>
				<div className='search'>
					<input
						type='text'
						ref={input}
						placeholder='Here!'
						onKeyUp={(e) => {
							if (e.key === 'Enter') showSearch();
						}}
					/>
					<button onClick={showSearch}>
						<FontAwesomeIcon icon={faArrowRight} />
					</button>
				</div>

				<div className='btns' ref={btnBox}>
					<button className='on' onClick={showGallery}>
						Ours
					</button>
					<button onClick={showUser}>Products</button>
					<button onClick={showInterest}>Etc</button>
				</div>
				{Loading && (
					<img
						className='loading'
						src={process.env.PUBLIC_URL + '/img/load1.gif'}
					/>
				)}
				<div className='frame' ref={frame}>
					<Masonry elementType='div' options={masonryOptions}>
						{Pics.map((pic, idx) => {
							return (
								<article key={idx}>
									<div className='pic_inner'>
										<div
											className='pic'
											onClick={() => {
												pop.current.open();
												setIndex(idx);
											}}>
											<img
												src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`}
												alt={pic.title}
											/>
											<div className='cover'>VIEW</div>
										</div>
										<h3>
											{pic.title.length > 25
												? pic.title.substr(0, 25) + '...'
												: pic.title}
										</h3>
									</div>
								</article>
							);
						})}
					</Masonry>
				</div>
			</Layout>

			<Popup ref={pop}>
				{Pics.length !== 0 && (
					<img
						src={`https://live.staticflickr.com/${Pics[Index].server}/${Pics[Index].id}_${Pics[Index].secret}_b.jpg`}
						alt={Pics[Index].title}
					/>
				)}
			</Popup>
		</>
	);
}

export default Gallery;
