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
	const [Location, setLocation] = useState(null);
	// 교통 정보 토글을 위한 불리언 값
	const [Traffic, setTraffic] = useState(false);

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
		container.current.innerHTML = '';

		const map = new kakao.maps.Map(container.current, opt);
		marker.setMap(map);
		setLocation(map);

		// 지도타입 컨트롤 생성
		const mapTypeControl = new kakao.maps.MapTypeControl();
		map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPLEFT);

		// 줌 컨트롤 생성
		const zoomControl = new kakao.maps.ZoomControl();
		map.addControl(zoomControl, kakao.maps.ControlPosition.LEFT);

		// resize
		const handleResize = () => {
			map.setCenter(opt.center);
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		if (!Location) return;
		Traffic
			? Location.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
			: Location.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	}, [Traffic]);

	return (
		<Layout name={'Location'}>
			<div className='map' ref={container}></div>
			<button onClick={() => setTraffic(!Traffic)}>
				{Traffic ? 'Traffic Off' : 'Traffic On'}
			</button>
		</Layout>
	);
}

export default Location;
