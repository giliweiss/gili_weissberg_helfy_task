import React, { useState, useEffect } from 'react';
import { useTask } from '../../context/TaskContext';
import styles from './TaskForm.module.css';

const TaskForm = ({ task = null, onComplete, onCancel }) => {
  const { createTask, updateTask } = useTask();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium'
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Initialize form data if editing existing task
  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title || '',
        description: task.description || '',
        priority: task.priority || 'medium'
      });
    }
  }, [task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    } else if (formData.title.trim().length < 3) {
      newErrors.title = 'Title must be at least 3 characters';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters';
    }
    
    if (!['low', 'medium', 'high'].includes(formData.priority)) {
      newErrors.priority = 'Invalid priority level';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    
    try {
      if (task) {
        // Update existing task
        await updateTask(task.id, formData);
      } else {
        // Create new task
        await createTask(formData);
        
        // Reset form after creating new task
        setFormData({
          title: '',
          description: '',
          priority: 'medium'
        });
      }
      
      if (onComplete) {
        onComplete();
      }
    } catch (error) {
      console.error('Failed to save task:', error);
      setErrors({ submit: 'Failed to save task. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    if (!task) {
      // Reset form for new task
      setFormData({
        title: '',
        description: '',
        priority: 'medium'
      });
    }
    setErrors({});
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div className={styles.taskFormContainer}>
      <form onSubmit={handleSubmit} className={styles.taskForm}>
        <h3 className={styles.formTitle}>
          {task ? 'Edit Task' : 'Create New Task'}
        </h3>
        
        {errors.submit && (
          <div className={styles.errorMessage}>
            {errors.submit}
          </div>
        )}
        
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>
            Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`${styles.input} ${errors.title ? styles.inputError : ''}`}
            placeholder="Enter task title..."
            disabled={loading}
          />
          {errors.title && (
            <span className={styles.fieldError}>{errors.title}</span>
          )}
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="description" className={styles.label}>
            Description *
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={`${styles.textarea} ${errors.description ? styles.inputError : ''}`}
            placeholder="Enter task description..."
            rows="4"
            disabled={loading}
          />
          {errors.description && (
            <span className={styles.fieldError}>{errors.description}</span>
          )}
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="priority" className={styles.label}>
            Priority
          </label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className={`${styles.select} ${errors.priority ? styles.inputError : ''}`}
            disabled={loading}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          {errors.priority && (
            <span className={styles.fieldError}>{errors.priority}</span>
          )}
        </div>
        
        <div className={styles.formActions}>
          <button
            type="button"
            onClick={handleCancel}
            className={styles.cancelButton}
            disabled={loading}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={loading}
          >
            {loading ? 'Saving...' : (task ? 'Update Task' : 'Create Task')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
