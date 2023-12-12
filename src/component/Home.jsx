import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/swiper.css';
import '../styles/home.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { DataConsumer } from '../context/dataContext';

export default function Home() {
  const { apiData, apiTwoData } = DataConsumer();

  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className='mySwiper'
      >
        <SwiperSlide className='home1'>
          <div className='home-left'>
            <h4>top seller in this week</h4>
            <h1>chouse your healthy life style</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              explicabo quidem aliquid obcaecati ipsa, magni quam! Sed obcaecati
              placeat debitis voluptas corrupti explicabo voluptate ad
              perferendis aspernatur? Accusamus, officiis impedit.
            </p>
            <button>Shop Now</button>
          </div>
          <div className='home-right'>
            <img
              src={apiTwoData && apiTwoData[0].strCategoryThumb}
              alt={apiTwoData && apiTwoData[0].strCategory}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='home1'>
          <div className='home-left'>
            <h4>amazing deals and discount</h4>
            <h1>Eat Healthy Be Heathy</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              explicabo quidem aliquid obcaecati ipsa, magni quam! Sed obcaecati
              placeat debitis voluptas corrupti explicabo voluptate ad
              perferendis aspernatur? Accusamus, officiis impedit.
            </p>
            <button>Shop Now</button>
          </div>
          <div className='home-right'>
            <img
              src={apiTwoData && apiTwoData[1].strCategoryThumb}
              alt={apiTwoData && apiTwoData[1].strCategory}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
