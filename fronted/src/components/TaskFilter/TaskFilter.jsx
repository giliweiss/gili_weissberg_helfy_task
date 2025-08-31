import React from 'react';
import { useTask } from '../../context/TaskContext';
import styles from './TaskFilter.module.css';

const TaskFilter = () => {
  const { filter, setFilter, tasks } = useTask();

  const filterOptions = [
    { value: 'all', label: 'All Tasks', count: 0 }, // TODO: Calculate actual count
    { value: 'pending', label: 'Pending', count: 0 }, // TODO: Calculate actual count
    { value: 'completed', label: 'Completed', count: 0 } // TODO: Calculate actual count
  ];

  return (
    <div className={styles.filterContainer}>
      {/* TODO: Implement filter title */}
      {/* TODO: Implement filter buttons with counts */}
      {/* TODO: Highlight active filter */}
      {/* TODO: Handle filter changes */}
    </div>
  );
};

export default TaskFilter;
