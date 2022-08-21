import Layout from '../common/Layout';
import Popup from '../common/Popup';
import axios from 'axios';
import Masonry from 'react-masonry-component';
import { useState, useEffect, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

function Gallery() {
	const [Items, setItems] = useState([]);
	const [Open, setOpen] = useState(false);
	const [EnableClick, setEnableClick] = useState(false);
	const [Index, setIndex] = useState(0);
	const frame = useRef(null);
	const btnBox = useRef(null);

	const [Loading, setLoading] = useState(true);

	//masonry 전환속도 옵션객체 설정
	const masonryOptions = { transitionDuration: '0.5s' };

	const num = 150;
	const id = '196138805@N05';

	const getFlickr = async (opt) => {
		const key = 'ca6bb9623cb117b2c44bd339126530e9';
		const method_gallery = 'flickr.galleries.getPhotos';
		const method_interest = 'flickr.interestingness.getList';
		const method_user = 'flickr.people.getPhotos';
		const gallery_id = '72157721034367990';
		let url = '';

		if (opt.type === 'gallery')
			url = `https://www.flickr.com/services/rest/?method=${method_gallery}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&gallery_id=${gallery_id}`;
		if (opt.type === 'interest')
			url = `https://www.flickr.com/services/rest/?method=${method_interest}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`;
		if (opt.type === 'user')
			url = `https://www.flickr.com/services/rest/?method=${method_user}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&user_id=${id}`;

		await axios.get(url).then((json) => {
			// console.log(json.data.photos.photo);
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

	useEffect(() => getFlickr({ type: 'gallery' }), []);

	return (
		<>
			<Layout name={'Gallery'}>
				<input type='text' />
				<button>
					<FontAwesomeIcon icon={faArrowCircleRight} />
				</button>

				<div className='btns' ref={btnBox}>
					<button
						className='on'
						onClick={() => {
							if (!EnableClick) return;
							setLoading(true);
							btnHandle(0);
							frame.current.classList.remove('on');
							getFlickr({ type: 'gallery' });
							setEnableClick(true);
						}}>
						Ours
					</button>
					<button
						onClick={() => {
							if (!EnableClick) return;
							setLoading(true);
							btnHandle(1);
							frame.current.classList.remove('on');
							getFlickr({ type: 'user' });
							setEnableClick(true);
						}}>
						Products
					</button>
					<button
						onClick={() => {
							if (!EnableClick) return;
							setLoading(true);
							btnHandle(2);
							frame.current.classList.remove('on');
							getFlickr({ type: 'interest' });
							setEnableClick(true);
						}}>
						Etc
					</button>
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
										<div className='pic'>
											<img
												src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
												alt={pic.title}
												onClick={() => {
													setOpen(true);
													setIndex(idx);
												}}
											/>
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
