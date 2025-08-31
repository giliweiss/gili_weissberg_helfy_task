import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './pages/HomePage/HomePage';
import styles from './styles/App.module.css';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
