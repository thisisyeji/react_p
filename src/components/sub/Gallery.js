import Layout from '../common/Layout';
import Popup from '../common/Popup';
import axios from 'axios';
import Masonry from 'react-masonry-component';
import { useState, useEffect, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Gallery() {
	const [Items, setItems] = useState([]);
	const [Open, setOpen] = useState(false);
	const [EnableClick, setEnableClick] = useState(false);
	const [Index, setIndex] = useState(0);
	const frame = useRef(null);
	const btnBox = useRef(null);
	const input = useRef(null);

	const [Loading, setLoading] = useState(true);

	//masonry 전환속도 옵션객체 설정
	const masonryOptions = { transitionDuration: '0.7s' };

	const num = 150;
	const id = '196138805@N05';

	const getFlickr = async (opt) => {
		const key = 'ca6bb9623cb117b2c44bd339126530e9';
		const method_gallery = 'flickr.galleries.getPhotos';
		const method_interest = 'flickr.interestingness.getList';
		const method_user = 'flickr.people.getPhotos';
		const method_search = 'flickr.photos.search';

		const gallery_id = '72157721034367990';
		let url = '';

		if (opt.type === 'gallery')
			url = `https://www.flickr.com/services/rest/?method=${method_gallery}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&gallery_id=${gallery_id}`;
		if (opt.type === 'interest')
			url = `https://www.flickr.com/services/rest/?method=${method_interest}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`;
		if (opt.type === 'user')
			url = `https://www.flickr.com/services/rest/?method=${method_user}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&user_id=${id}`;
		if (opt.type === 'search')
			url = `https://www.flickr.com/services/rest/?method=${method_search}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&tags=${opt.tag}`;

		await axios.get(url).then((json) => {
			// console.log(json.data.photos.photo);
			if (json.data.photos.photo.length === 0)
				return alert('There are no matching data. Please try again.');
			setItems(json.data.photos.photo);
		});
		setTimeout(() => {
			frame.current.classList.add('on');
			setLoading(false);
			setEnableClick(true);
		}, 1000);
	};

	const btnHandle = (index) => {
		const btns = btnBox.current.querySelectorAll('button');
		for (const btn of btns) {
			btn.classList.remove('on');
		}
		btns[index].classList.add('on');
	};

	const showSearch = () => {
		const result = input.current.value.trim();
		if (!result) return alert('Please enter any keyword.');
		if (!EnableClick) return;
		setLoading(true);
		frame.current.classList.remove('on');
		getFlickr({ type: 'search', tag: result });
		setEnableClick(true);
		setTimeout(() => {
			input.current.value = '';
		}, 2000);
	};

	const showGallery = () => {
		if (!EnableClick) return;
		setLoading(true);
		btnHandle(0);
		frame.current.classList.remove('on');
		getFlickr({ type: 'gallery' });
		setEnableClick(true);
	};

	const showUser = () => {
		if (!EnableClick) return;
		setLoading(true);
		btnHandle(1);
		frame.current.classList.remove('on');
		getFlickr({ type: 'user' });
		setEnableClick(true);
	};

	const showInterest = () => {
		if (!EnableClick) return;
		setLoading(true);
		btnHandle(2);
		frame.current.classList.remove('on');
		getFlickr({ type: 'interest' });
		setEnableClick(true);
	};

	useEffect(() => getFlickr({ type: 'gallery' }), []);

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
						{Items.map((pic, idx) => {
							return (
								<article key={idx}>
									<div className='pic_inner'>
										<div
											className='pic'
											onClick={() => {
												setOpen(true);
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

			{Open && (
				<Popup setOpen={setOpen}>
					<img
						src={`https://live.staticflickr.com/${Items[Index].server}/${Items[Index].id}_${Items[Index].secret}_b.jpg`}
						alt={Items[Index].title}
					/>
				</Popup>
			)}
		</>
	);
}

export default Gallery;
