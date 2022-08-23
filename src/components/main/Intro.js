import React from 'react';

function Intro() {
	const path = process.env.PUBLIC_URL;
	return (
		<section id='Intro' className='myScroll'>
			<div className='inner'>
				<h2>
					<div className='title_first'>
						DISCOVER
						<div className='img'>
							<img src={path + '/img/1.jpg'} />
						</div>
					</div>
					<div className='title_second'>
						<div className='img_second'>
							<img src={path + '/img/3.jpg'} />
						</div>
						AMAZING SCENT
					</div>
					AROUND THE WORLD
				</h2>
				<div className='btn'>Explore</div>
			</div>
		</section>
	);
}

export default Intro;
