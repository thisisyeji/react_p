import Layout from '../common/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Youtube() {
	const [Vids, setVids] = useState([]);

	useEffect(() => {
		const key = 'AIzaSyD1ZRgZNZXs590CNC6IbqqDi5RFFZNf1VM';
		const playlist = 'PL4lFp_wxDge_0KaYa0XNk7f4CZEA4Z1J3';
		const num = 6;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;

		axios.get(url).then((json) => {
			// console.log(json.data.items);
			setVids(json.data.items);
		});
	}, []);

	return (
		<Layout name={'Youtube'}>
			{Vids.map((data, idx) => {
				return (
					<article key={data.id}>
						<div className='img'>
							<img
								src={data.snippet.thumbnails.maxres.url}
								alt={data.snippet.title}
							/>
						</div>
						<div className='txt'>
							<h2>
								{data.snippet.title.length > 30
									? data.snippet.title.substr(0, 30) + '...'
									: data.snippet.title}
							</h2>

							<div className='info'>
								<p>
									{data.snippet.description.length > 200
										? data.snippet.description.substr(0, 200) + '...'
										: data.snippet.description}
								</p>
								<span>{data.snippet.publishedAt.split('T')[0]}</span>
							</div>
						</div>
					</article>
				);
			})}
		</Layout>
	);
}

export default Youtube;
