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
    // TODO: Set form data from existing task if provided
  }, [task]);

  const handleChange = (e) => {
    // TODO: Update form data on input change
    // TODO: Clear field errors when user types
  };

  const validateForm = () => {
    // TODO: Validate form fields
    // TODO: Check title length and required fields
    // TODO: Validate description length
    // TODO: Validate priority value
    // TODO: Return validation result
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // TODO: Validate form before submission
    // TODO: Set loading state
    // TODO: Create or update task based on mode
    // TODO: Reset form after creating new task
    // TODO: Call onComplete callback
    // TODO: Handle errors and reset loading state
  };

  const handleCancel = () => {
    // TODO: Reset form data
    // TODO: Clear errors
    // TODO: Call onCancel callback
  };

  return (
    <div className={styles.taskFormContainer}>
      <form onSubmit={handleSubmit} className={styles.taskForm}>
        {/* TODO: Implement form title */}
        {/* TODO: Display submission errors */}
        {/* TODO: Implement title input field with validation */}
        {/* TODO: Implement description textarea with validation */}
        {/* TODO: Implement priority select dropdown */}
        {/* TODO: Implement form action buttons (Cancel/Submit) */}
      </form>
    </div>
  );
};

export default TaskForm;
