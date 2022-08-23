import Layout from '../common/Layout';
import Popup from '../common/Popup';
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';

function Youtube() {
	const [Index, setIndex] = useState(0);
	const pop = useRef(null);
	const Vids = useSelector((store) => store.youtubeReducer.youtube);

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
