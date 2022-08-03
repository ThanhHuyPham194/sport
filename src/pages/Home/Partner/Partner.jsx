import React from 'react';
import './Partnet.scss';
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
// import Swiper styles
import 'swiper/css';
import slider1 from '../../../assets/images/partner1.png';
import slider2 from '../../../assets/images/partner2.png';
import slider3 from '../../../assets/images/partner3.png';
import slider4 from '../../../assets/images/partner4.png';
import slider5 from '../../../assets/images/partner5.png';
import slider6 from '../../../assets/images/partner6.png';
export default function Partner() {
  return (
    <div className='partner'>
      <div className="partner__group container">
        <h2 className="partner__title" data-aos="fade-right">
          NHÀ TÀI TRỢ
        </h2>
        <div className="partner__line" data-aos="zoom-in" data-aos-duration="2000"></div>
      </div>
      <div className="partner__slider" data-aos="fade-in" data-aos-delay="500">
        <Swiper
          spaceBetween={24}
          slidesPerView={4}
          allowSlideNext={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          modules={[Autoplay]}
          loop={true}
        >
          <SwiperSlide>
            <div className="img">
              <img src={slider1} alt="partner-img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src={slider2} alt="partner-img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src={slider3} alt="partner-img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src={slider4} alt="partner-img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src={slider5} alt="partner-img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src={slider6} alt="partner-img" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div >
  );
}
