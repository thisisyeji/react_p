import Layout from '../common/Layout';
import { useRef, useEffect } from 'react';

function Location() {
	// map
	const { kakao } = window;
	const container = useRef(null);
	const opt = {
		center: new kakao.maps.LatLng(37.51271224560607, 127.06069135102807),
		level: 3,
	};

	// marker image
	const imgSrc = process.env.PUBLIC_URL + '/img/marker1.png'; // 마커이미지
	const imgSize = new kakao.maps.Size(223, 99); // 마커이미지 크기
	const imgOpt = { offset: new kakao.maps.Point(116, 99) };

	const markerImg = new kakao.maps.MarkerImage(imgSrc, imgSize, imgOpt);

	// marker
	const marker = new kakao.maps.Marker({
		position: opt.center,
		image: markerImg,
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
