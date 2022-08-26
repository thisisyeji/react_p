// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper';

import { useSelector } from 'react-redux';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Vids() {
	const Videos = useSelector((store) => store.youtubeReducer.youtube);

	return (
		<section id='Vids' className='myScroll'>
			<Swiper
				modules={[Pagination, Navigation, Autoplay]}
				pagination={{ clickable: true }}
				navigation={true}
				// 간격
				spaceBetween={40}
				// 순환
				loop={true}
				// 한번에 보여질 슬라이드 갯수
				slidesPerView={3}
				// 1번 슬라이드를 센터로
				centeredSlides={true}>
				{Videos.map((data, idx) => {
					if (idx >= 4) return;
					return (
						<SwiperSlide key={data.id}>
							<div className='inner'>
								<div className='pic'>
									<img
										src={data.snippet.thumbnails.maxres.url}
										alt={data.snippet.title}
									/>
								</div>
								<h3>{data.snippet.title}</h3>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
}

export default Vids;
