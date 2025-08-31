import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './pages/HomePage/HomePage';
import styles from './styles/App.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* TODO: Add additional routes as needed */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
