import React, { useState, useEffect, useRef } from 'react';
import CarouselStyle from './Carousel.style';
import { CarouselProps } from '@interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Carousel = ({
  isArrow = true,
  isPage = true,
  col = 2,
  children,
}: CarouselProps) => {
  const [index, setIndex] = useState<number>(0);
  const [nav, setNav] = useState<number>(0);
  const [pageNumber] = useState<number>(
    !Array.isArray(children) ? 1 : Math.floor((children.length - 1) / col)
  );
  const slideRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${index}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
    }
  }, [index]);
  useEffect(() => {
    if (containerRef.current && nav === 0) {
      setNav(containerRef.current.offsetHeight);
    }
  }, []);

  const next = () => {
    if (!Array.isArray(children)) return;
    if (index >= pageNumber) {
      // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (!Array.isArray(children)) return;
    if (index === 0) {
      setIndex(pageNumber);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <CarouselStyle col={col} navPosition={nav} index={index}>
      <div className="carousel-main-cotainer" ref={containerRef}>
        <div className="carousel-content-container" ref={slideRef}>
          {children}
        </div>
      </div>
      {isArrow && (
        <div className="arrow-box">
          <button className="left" onClick={prev}>
            <FontAwesomeIcon icon="angle-left" />
          </button>
          <button className="right" onClick={next}>
            <FontAwesomeIcon icon="angle-right" />
          </button>
        </div>
      )}
      {isPage && (
        <div className="pagenation">
          {!Array.isArray(children) && children}
          {Array.isArray(children) &&
            children.map((_el, i) =>
              i % col === 0 ? (
                <div onClick={() => setIndex(Number(i / col))}>
                  <FontAwesomeIcon icon="circle" />
                </div>
              ) : null
            )}
        </div>
      )}
    </CarouselStyle>
  );
};

export default Carousel;
