import { useState } from 'react';
import NavbarPrimary from './view/components/NavbarPrimary';
import RoutesPrimary from './RoutesPrimary';
import FooterPrimary from './view/components/FooterPrimary';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <main className={` ${darkMode && 'dark-mode'}`}>
        <button
          type='button'
          className='btn btn-primary fixed-top top-50 end-0 icon-size-small rounded-right-full'
          onClick={() => setDarkMode(!darkMode)}
        >
          <img
            className='h-100 w-100 d-block'
            src={`/assets/${darkMode ? 'moon' : 'sun'}.png`}
            alt='dark-mode'
          />
        </button>
        <NavbarPrimary />
        <RoutesPrimary />
        <FooterPrimary />
      </main>
    </>
  );
}

export default App;
