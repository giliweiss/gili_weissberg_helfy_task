import { useRef, useEffect, useState, useCallback } from 'react';
import { useTask } from '../../context/TaskContext';
import TaskItem from '../TaskItem/TaskItem';
import styles from './TaskList.module.css';

const TaskList = () => {
  const { filteredTasks, loading, error } = useTask();
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const scrollToIndex = useCallback((index) => {
    if (!carouselRef.current || !filteredTasks || filteredTasks.length === 0) return;
    
    try {
      const itemWidth = carouselRef.current.scrollWidth / filteredTasks.length;
      const scrollPosition = index * itemWidth;
      
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      
      setCurrentIndex(index);
    } catch (error) {
      console.error('Error scrolling to index:', error);
    }
  }, [filteredTasks]);

  // Handle endless carousel scrolling
  useEffect(() => {
    if (!carouselRef.current || !filteredTasks || filteredTasks.length === 0) return;

    const handleScroll = () => {
      try {
        const scrollLeft = carouselRef.current.scrollLeft;
        const itemWidth = carouselRef.current.scrollWidth / filteredTasks.length;
        const newIndex = Math.round(scrollLeft / itemWidth);
        setCurrentIndex(newIndex);
      } catch (error) {
        console.error('Error handling scroll:', error);
      }
    };

    const carousel = carouselRef.current;
    carousel.addEventListener('scroll', handleScroll);
    
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, [filteredTasks]);

  // Auto-scroll for endless effect
  useEffect(() => {
    if (!isAutoScrolling || !filteredTasks || filteredTasks.length === 0) return;

    const interval = setInterval(() => {
      try {
        if (carouselRef.current) {
          const nextIndex = (currentIndex + 1) % filteredTasks.length;
          scrollToIndex(nextIndex);
        }
      } catch (error) {
        console.error('Error in auto-scroll:', error);
      }
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, filteredTasks, isAutoScrolling, scrollToIndex]);

  const nextSlide = () => {
    if (!filteredTasks || filteredTasks.length === 0) return;
    const nextIndex = (currentIndex + 1) % filteredTasks.length;
    scrollToIndex(nextIndex);
    setIsAutoScrolling(false); // Pause auto-scroll when user interacts
  };

  const prevSlide = () => {
    if (!filteredTasks || filteredTasks.length === 0) return;
    const prevIndex = currentIndex === 0 ? filteredTasks.length - 1 : currentIndex - 1;
    scrollToIndex(prevIndex);
    setIsAutoScrolling(false); // Pause auto-scroll when user interacts
  };

  const handleIndicatorClick = (index) => {
    if (!filteredTasks || filteredTasks.length === 0) return;
    scrollToIndex(index);
    setIsAutoScrolling(false); // Pause auto-scroll when user interacts
  };

  const resumeAutoScroll = () => {
    setIsAutoScrolling(true);
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p>Loading tasks...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <p className={styles.errorMessage}>Error: {error}</p>
        <p>Please try refreshing the page.</p>
      </div>
    );
  }

  if (!filteredTasks || filteredTasks.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <p className={styles.emptyMessage}>No tasks found</p>
        <p>Create your first task to get started!</p>
      </div>
    );
  }

  return (
    <div className={styles.taskListContainer}>
      <div className={styles.carouselWrapper}>
        {/* Navigation Buttons */}
        {filteredTasks && filteredTasks.length > 1 && (
          <>
            <button
              className={`${styles.carouselButton} ${styles.prevButton}`}
              onClick={prevSlide}
              aria-label="Previous task"
            >
              ‹
            </button>
            <button
              className={`${styles.carouselButton} ${styles.nextButton}`}
              onClick={nextSlide}
              aria-label="Next task"
            >
              ›
            </button>
          </>
        )}

        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          className={styles.carousel}
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={resumeAutoScroll}
        >
          {filteredTasks && filteredTasks.map((task) => (
            <div key={task.id} className={styles.carouselItem}>
              <TaskItem task={task} />
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        {filteredTasks && filteredTasks.length > 1 && (
          <div className={styles.indicators}>
            {filteredTasks.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
                onClick={() => handleIndicatorClick(index)}
                aria-label={`Go to task ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
