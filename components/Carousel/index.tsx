import React, { useState, useEffect, useRef } from 'react';
import CarouselStyle from './Carousel.style';
import { CarouselProps } from '@interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Carousel = ({
  isPage,
  col = 2,
  children,
  autoCol = false,
}: CarouselProps) => {
  const [isArrow, setIsArrow] = useState<boolean>(false);
  const [colState, setColState] = useState<number>(col);
  const [viewWidth, setViewWidth] = useState<number | undefined>(undefined);

  const [isPageState, setIsPageState] = useState<boolean>(
    isPage ? true : false
  );
  const [index, setIndex] = useState<number>(0);
  const [nav, setNav] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(
    !Array.isArray(children) ? 1 : Math.floor((children.length - 1) / colState)
  );
  const slideRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleResize = () => {
    setViewWidth(window.innerWidth);
  };
  useEffect(() => {
    handleResize();
    if (window) {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (autoCol) {
      if (viewWidth && viewWidth < 425) setColState(1);
      if (viewWidth && viewWidth > 425 && viewWidth < 1024) setColState(2);
      if (viewWidth && viewWidth > 1024) setColState(4);
    }
  }, [viewWidth, autoCol]);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${index}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
    }
  }, [index]);

  useEffect(() => {
    setPageNumber(
      !Array.isArray(children)
        ? 0
        : Math.floor((children.length - 1) / colState) + 1
    );
    if (containerRef.current) {
      setNav(containerRef.current.offsetHeight);
    }
  }, [children, colState]);
  useEffect(() => {
    if (pageNumber > 1) {
      setIsArrow(true);
      setIsPageState(true);
    } else {
      setIsPageState(false);
      setIsArrow(false);
    }
  }, [pageNumber]);

  const next = () => {
    if (!Array.isArray(children)) return;
    if (index < pageNumber - 1) {
      // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setIndex(index + 1);
    } else {
      setIndex(0);
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
    <CarouselStyle
      className="carousel-wrapper"
      col={colState}
      navPosition={nav}
      index={index}
    >
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
      {isPageState && (
        <div className="pagination">
          {!Array.isArray(children) && children}
          {Array.isArray(children) &&
            children.map((_el, i) =>
              i % colState === 0 ? (
                <div key={i} onClick={() => setIndex(Number(i / colState))}>
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
