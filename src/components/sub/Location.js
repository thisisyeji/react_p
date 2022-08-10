import Layout from '../common/Layout';
import { useRef, useEffect } from 'react';

function Location() {
	// map
	const { kakao } = window;
	const container = useRef(null);
	const opt = {
		center: new kakao.maps.LatLng(33.450701, 126.570667),
		level: 3,
	};

	// marker
	const markerPosition = opt.center;
	const marker = new kakao.maps.Marker({
		position: markerPosition,
	});

	useEffect(() => {
		const map = new kakao.maps.Map(container.current, opt);
		marker.setMap(map);
	}, []);

	return (
		<Layout name={'Location'}>
			<div className='map' ref={container}></div>
		</Layout>
	);
}

export default Location;
