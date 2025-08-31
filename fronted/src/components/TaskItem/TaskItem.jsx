import React, { useState } from 'react';
import { useTask } from '../../context/TaskContext';
import TaskForm from '../TaskForm/TaskForm';
import styles from './TaskItem.module.css';

const TaskItem = ({ task }) => {
  const { toggleTask, deleteTask } = useTask();
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleToggle = async () => {
    try {
      await toggleTask(task.id);
    } catch (error) {
      console.error('Failed to toggle task:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTask(task.id);
      setShowDeleteConfirm(false);
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  const handleEditComplete = () => {
    setIsEditing(false);
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'high':
        return styles.priorityHigh;
      case 'medium':
        return styles.priorityMedium;
      case 'low':
        return styles.priorityLow;
      default:
        return styles.priorityMedium;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (isEditing) {
    return (
      <div className={styles.taskItem}>
        <TaskForm 
          task={task} 
          onComplete={handleEditComplete}
          onCancel={() => setIsEditing(false)}
        />
      </div>
    );
  }

  return (
    <div className={`${styles.taskItem} ${task.completed ? styles.completed : ''}`}>
      <div className={styles.taskHeader}>
        <div className={`${styles.priorityBadge} ${getPriorityClass(task.priority)}`}>
          {task.priority.toUpperCase()}
        </div>
        <div className={styles.taskActions}>
          <button
            className={styles.editButton}
            onClick={() => setIsEditing(true)}
            aria-label="Edit task"
          >
            ✏️
          </button>
          <button
            className={styles.deleteButton}
            onClick={() => setShowDeleteConfirm(true)}
            aria-label="Delete task"
          >
            🗑️
          </button>
        </div>
      </div>

      <div className={styles.taskContent}>
        <h3 className={styles.taskTitle}>{task.title}</h3>
        <p className={styles.taskDescription}>{task.description}</p>
      </div>

      <div className={styles.taskFooter}>
        <div className={styles.taskMeta}>
          <span className={styles.createdAt}>
            Created: {formatDate(task.createdAt)}
          </span>
        </div>
        
        <div className={styles.taskControls}>
          <label className={styles.checkboxContainer}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={handleToggle}
              className={styles.checkbox}
            />
            <span className={styles.checkboxLabel}>
              {task.completed ? 'Completed' : 'Mark Complete'}
            </span>
          </label>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h4>Delete Task</h4>
            <p>Are you sure you want to delete "{task.title}"?</p>
            <div className={styles.modalActions}>
              <button
                className={styles.cancelButton}
                onClick={() => setShowDeleteConfirm(false)}
              >
                Cancel
              </button>
              <button
                className={styles.confirmDeleteButton}
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
