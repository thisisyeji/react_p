// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper';

import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import Popup from '../common/Popup';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Vids({ Scrolled, currentPos }) {
	const Videos = useSelector((store) => store.youtubeReducer.youtube);

	const position = Scrolled - currentPos || 0;
	const pop = useRef(null);
	const [Index, setIndex] = useState(0);

	return (
		<>
			<section id='Vids' className='myScroll'>
				<h2 className='hidden'>Youtube</h2>
				<div className='banner'>
					<span style={{ marginLeft: -position }}>
						Acqua di Parma, a symbol of Italian savoir-faire and refinement,
					</span>
				</div>
				<Swiper
					modules={[Pagination, Navigation, Autoplay]}
					// pagination={{ clickable: true }}
					navigation={true}
					// 오토 플레이
					autoplay={{ delay: 3000, disableOnInteraction: true }}
					// 간격
					spaceBetween={20}
					// 순환
					loop={true}
					// 한번에 보여질 슬라이드 갯수
					slidesPerView={1}
					// 1번 슬라이드를 센터로
					centeredSlides={true}
					breakpoints={{
						540: {
							slidesPerView: 3,
						},
					}}>
					{Videos.map((data, idx) => {
						return (
							<SwiperSlide key={data.id}>
								<div className='inner'>
									<div className='pic'>
										<img
											src={data.snippet.thumbnails.maxres.url}
											alt={data.snippet.title}
										/>
										<div
											className='cover'
											onClick={() => {
												setIndex(idx);
												pop.current.open();
											}}>
											VIEW
										</div>
									</div>
									<h3>{data.snippet.title}</h3>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
				<div className='banner'>
					<span style={{ marginLeft: position }} className='banner_bottom'>
						embodies discreet luxury through its elegant fragrances and
						lifestyle products.
					</span>
				</div>
			</section>
			<Popup ref={pop}>
				{Videos.length !== 0 && (
					<iframe
						src={`https://www.youtube.com/embed/${Videos[Index].snippet.resourceId.videoId}`}
						frameBorder='0'
						allowFullScreen></iframe>
				)}
			</Popup>
		</>
	);
}

export default Vids;
