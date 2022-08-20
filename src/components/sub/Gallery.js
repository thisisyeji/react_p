import Layout from '../common/Layout';
import Popup from '../common/Popup';
import axios from 'axios';
import Masonry from 'react-masonry-component';
import { useState, useEffect, useRef } from 'react';

function Gallery() {
	const [Items, setItems] = useState([]);
	const [Open, setOpen] = useState(false);
	const [Index, setIndex] = useState(0);
	const frame = useRef(null);

	//masonry 전환속도 옵션객체 설정
	const masonryOptions = { transitionDuration: '0.5s' };

	const key = 'ca6bb9623cb117b2c44bd339126530e9';
	const method_gallery = 'flickr.galleries.getPhotos';
	const method_interest = 'flickr.interestingness.getList';
	const gallery_id = '72157721034367990';
	const num = 150;
	const id = '196138805@N05';
	const url_gallery = `https://www.flickr.com/services/rest/?method=${method_gallery}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&gallery_id=${gallery_id}`;
	const url_interest = `https://www.flickr.com/services/rest/?method=${method_interest}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`;

	const getFlickr = async (url) => {
		await axios.get(url).then((json) => {
			console.log(json.data.photos.photo);
			setItems(json.data.photos.photo);
		});
		frame.current.classList.add('on');
	};

	useEffect(
		() =>
			setTimeout(() => {
				getFlickr(url_gallery);
			}, 500),
		[]
	);

	return (
		<>
			<Layout name={'Gallery'}>
				<div className='left'>
					<button
						onClick={() => {
							frame.current.classList.remove('on');
							getFlickr(url_interest);
						}}>
						All
					</button>
					<button
						onClick={() => {
							frame.current.classList.remove('on');
							getFlickr(url_gallery);
						}}>
						Ours
					</button>
				</div>

				<div className='frame' ref={frame}>
					<Masonry elementType='div' options={masonryOptions}>
						{Items.map((pic, idx) => {
							if (pic.title > 15)
								pic.title = pic.title.substring(0, 15) + '...';
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
										<h2>
											{pic.title.length > 30
												? pic.title.substr(0, 30) + '...'
												: pic.title}
										</h2>
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
