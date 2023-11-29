import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { EffectCoverflow, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import RightArrowIcon from '../../icons/RightArrowIcon';
import LeftArrowIcon from '../../icons/LeftArrowIcon';

const Image = styled.img`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  height: ${(props) => props.height} !important;
  width: ${(props) => props.width} !important;
`;

const SlidesContainer = styled.div`
  background-color: ${(props) => props.theme['background-color-primary']};
  padding: 24px 24px 0px 24px;
  border: 1px solid #3c3c3c;
  border-radius: 12px;
`;

const SlidesInfo = styled.div`
  width: 100%;
  text-align: center;
  padding: 12px 0px;
`;

const SlidesTitle = styled.span`
  display: inline-block;
  color: ${(props) => props.theme['content-color-secondary']};
  background-color: ${(props) => props.theme['background-color-primary']};
  border: 1px solid #3c3c3c;
  border-radius: 12px;
  padding: 8px;
  font-family: ${(props) => props.theme['font-family-secondary']};
  font-size: ${(props) => props.theme['font-size-m']};
  line-height: 1;
`;

const SlidesNavigationContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const SlidesNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  margin-top: 24px;
  background-color: white;
  border-radius: 999px;
  width: fit-content;
  background: rgba(255, 255, 255, .1);
  border: 1px solid hsla(0, 0%, 100%, .05);
  backdrop-filter: blur(15px);
`;

const SlideChangeArrow = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  outline: none;
  border: 1px solid #666666;
  border-radius: 999px;
  background-color: transparent;
  transition: background-color 0.3s ease-in;

  svg path {
    transition: fill 0.3s ease-in;
  }

  ${(props) => props.isDisabled ? `
    cursor: not-allowed;
    border: 1px solid ${props.theme['content-color-tertiary']};
    svg path {
      fill: ${props.theme['content-color-tertiary']};
    }
  ` : `
    border: 1px solid ${props.theme['border-color-light']};
    svg path {
      fill: ${props.theme['content-color-primary']};
    }

    &:active,
    &.pressed {
      background-color: ${props.theme['background-color-primary']};
    }

    &:hover {
      background-color: ${props.theme['background-color-primary']};
    }
  `}
`;

const SlidePagination = styled.div`
  padding: 0px 4px;
`;

const SlidePaginationBullet = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  height: 10px;
  width: 10px;
  margin: 0 4px;
  border-radius: 999px;
  border: ${(props) => props.isActiveSlide ? '1px solid transparent' : '1px solid #666666'};
  background-color: ${(props) => props.isActiveSlide ? '#097BED' : 'rgba(0, 0, 0, 0.2)'};
`;

export default function Carousel(props) {
  const { slides } = props;
  const middleSlideIndex = Math.floor(slides.length / 2);
  const [swiper, setSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(middleSlideIndex);

  const slideNavigationRef = useRef(null);

  const goToPreviousSlide = () => {
    swiper.slidePrev();
  }

  const goToNextSlide = () => {
    swiper.slideNext();
  }

  const goToSlide = (index) => {
    swiper.slideTo(index);
  }

  const handleSlideChange = (event) => {
    setActiveSlide(event.activeIndex);
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (slideNavigationRef && slideNavigationRef.current) {
        if (e.key === 'ArrowRight') {
          const nextSlideButton = slideNavigationRef.current.querySelector('.next-slide-button');

          if (nextSlideButton) {
            nextSlideButton.classList.add('pressed');
          }

          setTimeout(() => {
            nextSlideButton.classList.remove('pressed');
          }, 500);
        }

        else if (e.key === 'ArrowLeft') {
          const prevSlideButton = slideNavigationRef.current.querySelector('.prev-slide-button');

          if (prevSlideButton) {
            prevSlideButton.classList.add('pressed');
          }

          setTimeout(() => {
            prevSlideButton.classList.remove('pressed');
          }, 500);
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, []);
  
  return (
    <>
      <SlidesContainer>
        <Swiper
          effect='coverflow'
          slidesPerView='auto'
          initialSlide={middleSlideIndex}
          grabCursor={true}
          centeredSlides={true}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[EffectCoverflow, Keyboard]}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
          }}
          keyboard={{
            enabled: true
          }}
          onSwiper={setSwiper}
          onSlideChange={handleSlideChange}
        >
          {slides.map((slide, index) => (
            <StyledSwiperSlide
              key={index}
              height='500px'
              width='350px'
            >
              <Image
                height='500px'
                width='350px'
                src={slide.src}
              />
            </StyledSwiperSlide>
          ))}
        </Swiper>
        <SlidesInfo>
          <SlidesTitle>{slides[activeSlide].title}</SlidesTitle>
        </SlidesInfo>
      </SlidesContainer>
      <SlidesNavigationContainer ref={slideNavigationRef}>
        <SlidesNavigation>
          <SlideChangeArrow
            onClick={goToPreviousSlide}
            isDisabled={activeSlide === 0}
            className='prev-slide-button'
          >
            <LeftArrowIcon />
          </SlideChangeArrow>
          <SlidePagination>
            {slides.map((_,index) => (
              <SlidePaginationBullet
                key={index}
                isActiveSlide={activeSlide === index}
                onClick={() => goToSlide(index)}
              />  
            ))}
          </SlidePagination>
          <SlideChangeArrow
            onClick={goToNextSlide}
            isDisabled={activeSlide === slides.length - 1}
            className='next-slide-button'
          >
            <RightArrowIcon />
          </SlideChangeArrow>
        </SlidesNavigation>
      </SlidesNavigationContainer>
    </>
  );
}