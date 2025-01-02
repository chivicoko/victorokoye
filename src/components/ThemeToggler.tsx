interface ThemeTogglerProps {
    darkTheme: boolean;
    setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  const ThemeToggler: React.FC<ThemeTogglerProps> = ({ darkTheme, setDarkTheme }) => {
    const toggleDarkMode = () => {
      setDarkTheme((prev: boolean) => !prev);
    };
  
    return (
      <button 
        onClick={toggleDarkMode} 
        className={`z-[9999] shadow-xl fixed top-2 right-3 p-1 rounded-full ${darkTheme ? 'bg-neutral-300 text-neutral-800' : 'bg-neutral-800 text-neutral-300'}`}
      >
        {/* {darkTheme ? 'LHT' : 'DRK'} */}

        <svg id="toggleDarkMode" className="dark-mode-toggle h-[40px] w-[40px]" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)">
          <g id="SVGRepo_bgCarrier" strokeWidth="0">
            <rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#45a049" strokeWidth="0"></rect>
          </g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M9.00068 19.0001C9.00068 19.8401 9.13068 20.6601 9.37068 21.4201C5.53068 20.0901 2.63068 16.5601 2.33068 12.4301C2.03068 8.04012 4.56068 3.94012 8.65068 2.22012C9.71068 1.78012 10.2507 2.10012 10.4807 2.33012C10.7007 2.55012 11.0107 3.08012 10.5707 4.09012C10.1207 5.13012 9.90068 6.23012 9.90068 7.37012C9.91068 9.41012 10.7107 11.3001 12.0107 12.7501C10.1807 14.2101 9.00068 16.4701 9.00068 19.0001Z" fill="#292D32"></path>
            <path opacity="0.4" d="M21.21 17.72C19.23 20.41 16.09 21.99 12.74 21.99C12.58 21.99 12.42 21.98 12.26 21.97C11.26 21.93 10.29 21.74 9.37 21.42C9.13 20.66 9 19.84 9 19C9 16.47 10.18 14.21 12.01 12.75C13.48 14.4 15.59 15.47 17.92 15.57C18.55 15.6 19.18 15.55 19.8 15.44C20.92 15.24 21.37 15.66 21.53 15.93C21.7 16.2 21.88 16.79 21.21 17.72Z" fill="#292D32"></path>
          </g>
        </svg>

      </button>
    );
  };
  
  export default ThemeToggler;
  