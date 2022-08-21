// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Vids() {
	return (
		<section id='Vids' className='myScroll'>
			<Swiper
				modules={[Pagination, Navigation]}
				pagination={{ clickable: true }}
				// navigation={true}
				// 간격
				spaceBetween={50}
				// 순환
				loop={true}
				// 한번에 보여질 슬라이드 갯수
				slidesPerView={3}
				// 1번 슬라이드를 센터로
				centeredSlides={true}>
				<SwiperSlide>
					<div className='swipe_inner'>1</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='swipe_inner'>2</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='swipe_inner'>3</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='swipe_inner'>4</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='swipe_inner'>5</div>
				</SwiperSlide>
			</Swiper>
		</section>
	);
}

export default Vids;
