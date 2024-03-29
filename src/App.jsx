import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

// components
import Home from './pages/Home/Home';
import NavBarDesktop from '@/components/NavBar/NavBarDesktop';
import NavBarMobile from '@/components/NavBar/NavBarMobile';
import ProjectDetails from './pages/Details/ProjectDetails';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? setDarkMode(true)
      : setDarkMode(false);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className='bg-bg_light text-text_light dark:bg-bg_dark dark:text-text_dark'>
        <NavBarDesktop darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <NavBarMobile darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path='/' element={<Home darkMode={darkMode} />} />
          <Route path='/projects/:endpoint' element={<ProjectDetails darkMode={darkMode} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
