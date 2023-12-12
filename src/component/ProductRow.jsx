import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import '../styles/productRow.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import { toast } from 'react-toastify';
import { DataConsumer } from '../context/dataContext';

const RowContainer = () => {
  const { apiData } = DataConsumer();

  const notifyMsg = () => {
    toast.warning('Please LogIn!');
  };

  const customSlider = useRef();

  const previous = () => {
    customSlider.current.slickNext();
  };

  const next = () => {
    customSlider.current.slickPrev();
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'none', background: 'red' }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'none', background: 'green' }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2500,
    cssEase: 'linear',
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section className='rowContainer'>
      <div className='rowContainer-title'>
        <p className='rowContainer-titleName'>Top Categories </p>
        <div className='rowContainer-sliderBtn'>
          <div className='rowContainer-left-sliderBtn' onClick={next}>
            <span>
              <BiChevronLeft />
            </span>
          </div>
          <div className='rowContainer-right-sliderBtn' onClick={previous}>
            <span>
              <BiChevronRight />
            </span>
          </div>
        </div>
      </div>
      <div className='rowContainer-sliderContainer'>
        <Slider {...settings} ref={customSlider}>
          {apiData &&
            apiData.categories.map((item, index) => {
              const {
                idCategory,
                strCategory,
                strCategoryDescription,
                strCategoryThumb,
              } = item;
              return (
                <div className='rowContainer-slider' key={index}>
                  <div className='rowContainer-container'>
                    <div className='rowContainer-imgContainer'>
                      <div className='rowContainer-img'>
                        <img src={strCategoryThumb} alt={strCategory} />
                      </div>
                    </div>
                    <div className='rowContainer-slider-footer'>
                      <p className='rowContainer-slider-foodName'>
                        {strCategory}
                      </p>
                      <div className='rowContainer-price'>
                        <span className='rowContainer-priceIcon'>$</span>
                        <span className='rowContainer-priceName'>
                          {idCategory}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </section>
  );
};

export default RowContainer;
