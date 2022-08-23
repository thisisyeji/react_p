function Visual() {
	return (
		<figure id='Visual' className='myScroll'>
			<video
				src={process.env.PUBLIC_URL + '/img/vid1.mp4'}
				muted
				loop
				autoPlay></video>
			<h2>DISCOVER</h2>
		</figure>
	);
}

export default Visual;
