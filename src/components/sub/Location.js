import Layout from '../common/Layout';
import { useRef, useEffect, useState } from 'react';

function Location() {
	// map
	const { kakao } = window;
	const container = useRef(null);
	const opt = {
		center: new kakao.maps.LatLng(37.51271224560607, 127.06069135102807),
		level: 3,
	};

	// 교통정보
	const [Traffic, setTraffic] = useState(null);
	// 교통 정보 토글을 위한 불리언 값
	const [TraToggle, setTraToggle] = useState(false);

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
		setTraffic(map);
	}, []);

	useEffect(() => {
		if (!Traffic) return;
		TraToggle
			? Traffic.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
			: Traffic.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	}, [TraToggle]);

	return (
		<Layout name={'Location'}>
			<div className='map' ref={container}></div>
			<button onClick={() => setTraToggle(!TraToggle)}>
				{TraToggle ? 'Traffic Off' : 'Traffic On'}
			</button>
		</Layout>
	);
}

export default Location;
