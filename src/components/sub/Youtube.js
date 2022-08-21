import Layout from '../common/Layout';
import Popup from '../common/Popup';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

function Youtube() {
	const [Vids, setVids] = useState([]);
	const [Index, setIndex] = useState(0);

	const pop = useRef(null);

	const getYotube = async () => {
		const key = 'AIzaSyD1ZRgZNZXs590CNC6IbqqDi5RFFZNf1VM';
		const playlist = 'PL4lFp_wxDge9JYZdXJgroiHplCVIIJ9vq';
		const num = 6;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;

		await axios.get(url).then((json) => {
			// console.log(json.data.items);
			setVids(json.data.items);
		});
	};

	useEffect(getYotube, []);

	return (
		<>
			<Layout name={'Youtube'}>
				{Vids.map((data, idx) => {
					return (
						<article key={data.id}>
							<div className='title'>
								<h2>
									{data.snippet.title.length > 33
										? data.snippet.title.substr(0, 33) + '...'
										: data.snippet.title}
								</h2>
							</div>

							<div className='content'>
								<div className='img'>
									<img
										src={data.snippet.thumbnails.maxres.url}
										alt={data.snippet.title}
									/>
								</div>

								<div className='info'>
									<p>
										{data.snippet.description.length > 150
											? data.snippet.description.substr(0, 150) + '...'
											: data.snippet.description}
									</p>
									<span>{data.snippet.publishedAt.split('T')[0]}</span>
								</div>
							</div>

							<div className='btns'>
								<span
									onClick={() => {
										pop.current.open();
										setIndex(idx);
									}}>
									VIEW
								</span>
								<div className='line'></div>
							</div>
						</article>
					);
				})}
			</Layout>

			<Popup ref={pop}>
				{Vids.length !== 0 && (
					<iframe
						src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`}
						frameBorder='0'
						allowFullScreen></iframe>
				)}
			</Popup>
		</>
	);
}

export default Youtube;
