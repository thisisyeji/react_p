import Layout from '../common/Layout';
import Popup from '../common/Popup';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

function Gallery() {
	const key = 'ca6bb9623cb117b2c44bd339126530e9';
	const method_gallery = 'flickr.galleries.getPhotos';
	const gallery_id = '72157721034367990';
	const num = 150;
	const id = '196138805@N05';
	const url_gallery = `https://www.flickr.com/services/rest/?method=${method_gallery}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&gallery_id=${gallery_id}`;

	const [Items, setItems] = useState([]);
	const frame = useRef(null);

	const getFlickr = async (url) => {
		await axios.get(url).then((json) => {
			console.log(json.data.photos.photo);
			setItems(json.data.photos.photo);
		});
		frame.current.classList.add('on');
	};

	useEffect(() => getFlickr(url_gallery), []);

	return (
		<>
			<Layout name={'Gallery'}>
				<div className='left'></div>

				<div className='frame' ref={frame}>
					{Items.map((pic, idx) => {
						if (pic.title > 15) pic.title = pic.title.substring(0, 15) + '...';
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
				</div>
			</Layout>
		</>
	);
}

export default Gallery;
