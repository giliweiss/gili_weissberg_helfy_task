import React, { useState } from 'react';
import { useTask } from '../../context/TaskContext';
import TaskForm from '../TaskForm/TaskForm';
import styles from './TaskItem.module.css';

const TaskItem = ({ task }) => {
  const { toggleTask, deleteTask } = useTask();
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleToggle = async () => {
    // TODO: Toggle task completion status
    // TODO: Handle errors
  };

  const handleDelete = async () => {
    // TODO: Delete task after confirmation
    // TODO: Close confirmation modal
    // TODO: Handle errors
  };

  const handleEditComplete = () => {
    // TODO: Exit edit mode
  };

  const getPriorityClass = (priority) => {
    // TODO: Return appropriate CSS class based on priority level
  };

  const formatDate = (dateString) => {
    // TODO: Format date for display
  };

  if (isEditing) {
    return (
      <div className={styles.taskItem}>
        {/* TODO: Render TaskForm for editing */}
      </div>
    );
  }

  return (
    <div className={`${styles.taskItem} ${task.completed ? styles.completed : ''}`}>
      {/* TODO: Implement task header with priority badge and action buttons */}
      {/* TODO: Implement task content with title and description */}
      {/* TODO: Implement task footer with metadata and completion toggle */}
      {/* TODO: Implement delete confirmation modal */}
    </div>
  );
};

export default TaskItem;
