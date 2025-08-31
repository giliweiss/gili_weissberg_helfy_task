import { useState } from 'react';
import { TaskProvider } from '../../context/TaskContext';
import TaskList from '../../components/TaskList/TaskList';
import TaskForm from '../../components/TaskForm/TaskForm';
import TaskFilter from '../../components/TaskFilter/TaskFilter';
import styles from './Home.module.css';

const HomePage = () => {
  const [showForm, setShowForm] = useState(false);

  const handleFormComplete = () => {
    setShowForm(false);
  };

  return (
    <TaskProvider>
      <div className={styles.homePage}>
        <div className={styles.header}>
          <h1 className={styles.title}>Task Manager</h1>
          <p className={styles.subtitle}>Organize your tasks efficiently</p>
          
          <button
            className={styles.addTaskButton}
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'Cancel' : '+ Add New Task'}
          </button>
        </div>

        {showForm && (
          <div className={styles.formSection}>
            <TaskForm 
              onComplete={handleFormComplete}
              onCancel={() => setShowForm(false)}
            />
          </div>
        )}

        <div className={styles.filterSection}>
          <TaskFilter />
        </div>

        <div className={styles.tasksSection}>
          <TaskList />
        </div>
      </div>
    </TaskProvider>
  );
};

export default HomePage;
