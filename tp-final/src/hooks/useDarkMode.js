import { useState, useEffect } from 'react';

function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (window.matchMedia) {
      const darkModeListener = window.matchMedia('(prefers-color-scheme: dark)');

      const handleChange = (e) => {
        setIsDarkMode(e.matches);
      };

      darkModeListener.addEventListener('change', handleChange);

      // Limpia el listener cuando el componente se desmonta
      return () => {
        darkModeListener.removeEventListener('change', handleChange);
      };
    }
  }, []);

  return isDarkMode;
}

export default useDarkMode;
