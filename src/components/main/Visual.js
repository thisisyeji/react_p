function Visual() {
	return (
		<figure id='Visual'>
			<video
				src={process.env.PUBLIC_URL + '/img/vid0.mp4'}
				muted
				loop
				autoPlay></video>
		</figure>
	);
}

export default Visual;
