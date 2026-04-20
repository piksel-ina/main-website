import { useState, useEffect, useRef } from 'react';
import { translate } from '@docusaurus/Translate';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './styles.module.scss';

const Carousel = ({
  items = [],
  title,
  renderItem,
  itemsPerView = { desktop: 3, tablet: 2, mobile: 1 },
  showNavigation = true,
  showPagination = true,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItemsPerView, setCurrentItemsPerView] = useState(
    itemsPerView.desktop,
  );
  const [isMobile, setIsMobile] = useState(false);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);

  const minSwipeDistance = 50;

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 800;
      const tablet = window.innerWidth < 997;

      setIsMobile(mobile);

      if (mobile) {
        setCurrentItemsPerView(itemsPerView.mobile);
      } else if (tablet) {
        setCurrentItemsPerView(itemsPerView.tablet);
      } else {
        setCurrentItemsPerView(itemsPerView.desktop);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [itemsPerView]);

  const maxIndex = Math.max(0, items.length - currentItemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const getTransformValue = () => {
    const percentage = (currentIndex * 100) / currentItemsPerView;
    return `translateX(-${percentage}%)`;
  };

  if (!items.length) {
    return null;
  }

  return (
    <div className={`${styles.carousel} ${className}`}>
      <div className={styles['carousel__header']}>
        {title && <h3 className={styles['carousel__title']}>{title}</h3>}

        {showNavigation && !isMobile && (
          <div className={styles['carousel__nav']}>
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={styles['carousel__navBtn']}
              aria-label={translate({
                id: 'ui.carousel.prev',
                message: 'Previous items',
              })}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className={styles['carousel__navBtn']}
              aria-label={translate({
                id: 'ui.carousel.next',
                message: 'Next items',
              })}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>

      <div className={styles['carousel__wrapper']}>
        {showNavigation && isMobile && (
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`${styles['carousel__navBtn']} ${styles['carousel__navBtn--left']}`}
            aria-label={translate({
              id: 'ui.carousel.prev',
              message: 'Previous items',
            })}
          >
            <ChevronLeft size={20} />
          </button>
        )}

        <div
          className={styles['carousel__container']}
          ref={carouselRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className={styles['carousel__track']}
            style={{
              transform: getTransformValue(),
            }}
          >
            {items.map((item, index) => (
              <div key={item.id || index} className={styles['carousel__item']}>
                {renderItem ? (
                  renderItem(item, index)
                ) : (
                  <div>{JSON.stringify(item)}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {showNavigation && isMobile && (
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className={`${styles['carousel__navBtn']} ${styles['carousel__navBtn--right']}`}
            aria-label="Next items"
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>

      {showPagination && maxIndex > 0 && (
        <div className={styles['carousel__pagination']}>
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`${styles['carousel__dot']} ${
                currentIndex === index ? styles['carousel__dot--active'] : ''
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
