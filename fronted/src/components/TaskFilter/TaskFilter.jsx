import React from 'react';
import { useTask } from '../../context/TaskContext';
import styles from './TaskFilter.module.css';

const TaskFilter = () => {
  const { filter, setFilter, tasks } = useTask();

  const filterOptions = [
    { value: 'all', label: 'All Tasks', count: tasks.length },
    { value: 'pending', label: 'Pending', count: tasks.filter(task => !task.completed).length },
    { value: 'completed', label: 'Completed', count: tasks.filter(task => task.completed).length }
  ];

  return (
    <div className={styles.filterContainer}>
      <h3 className={styles.filterTitle}>Filter Tasks</h3>
      <div className={styles.filterButtons}>
        {filterOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => setFilter(option.value)}
            className={`${styles.filterButton} ${filter === option.value ? styles.active : ''}`}
          >
            <span className={styles.filterLabel}>{option.label}</span>
            <span className={styles.filterCount}>{option.count}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TaskFilter;
