import React, { useRef, useEffect, useState } from 'react';
import { useTask } from '../../context/TaskContext';
import TaskItem from '../TaskItem/TaskItem';
import styles from './TaskList.module.css';

const TaskList = () => {
  const { filteredTasks, loading, error } = useTask();
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle endless carousel scrolling
  useEffect(() => {
    // TODO: Set up scroll event listener for carousel
    // TODO: Calculate current index based on scroll position
    // TODO: Clean up event listener on unmount
  }, [filteredTasks.length, currentIndex]);

  // Auto-scroll for endless effect
  useEffect(() => {
    // TODO: Set up interval for auto-scrolling
    // TODO: Handle infinite loop at end of carousel
    // TODO: Clean up interval on unmount
  }, [filteredTasks.length]);

  const scrollToIndex = (index) => {
    // TODO: Scroll carousel to specific index with smooth animation
  };

  const nextSlide = () => {
    // TODO: Move to next slide in carousel
  };

  const prevSlide = () => {
    // TODO: Move to previous slide in carousel
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
      </div>
    );
  }

  if (filteredTasks.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <p className={styles.emptyMessage}>No tasks found. Create your first task!</p>
      </div>
    );
  }

  return (
    <div className={styles.taskListContainer}>
      <div className={styles.tasksGrid}>
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
