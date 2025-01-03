import { NavbarProps } from "@/utils/types";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import Link from "next/link";
import { useState } from "react";

const Navbar: React.FC<NavbarProps> = ({ firstDivClasses, secondDivClasses }) => {

  const [cvOptions, setCvOptions] = useState<boolean>(false);

  const handleCvToggle = () => setCvOptions((prev) => !prev);

  return (
    <nav className={`z-30 relative bg-cover bg-center ${firstDivClasses}`} style={{ backgroundImage: `url('/images/headerBg.jpg')` }}>
      <div className="bg-neutral-300 dark:bg-neutral-700 absolute inset-0 bg-opacity-80 dark:bg-opacity-80"></div>

      <div className={secondDivClasses}>
        <div className="relative flex items-center flex-wrap gap-2">
          
          <Link href='/' className='shadow-md whitespace-nowrap py-2 px-3 rounded-full border border-transparent hover:border-blue-700 bg-blue-700 hover:bg-transparent text-white hover:text-blue-700 dark:hover:text-white dark:hover:border-white group'>
            Home
          </Link>
          
          <Link href='/projects' className='shadow-md whitespace-nowrap py-2 px-3 rounded-full border border-transparent hover:border-blue-700 bg-blue-700 hover:bg-transparent text-white hover:text-blue-700 dark:hover:text-white dark:hover:border-white group'>
            Projects
          </Link>

          <button onClick={handleCvToggle} className='flex items-center justify-between gap-1 py-2 px-3 rounded-full border border-transparent hover:border-blue-700 bg-blue-700 hover:bg-transparent text-white hover:text-blue-700 dark:hover:text-white dark:hover:border-white group'>
            <span>CV</span>
            {cvOptions ? <KeyboardArrowUp fontSize='small' /> : <KeyboardArrowDown fontSize='small' /> }
          </button>
          <div className={`${cvOptions ? 'flex' : 'hidden'} w-fit absolute left-6 top-14 items-center gap-3`}>
            <Link href='/VICTOR_OKOYE.pdf' download="Victor Okoye's Resumé" className='shadow-xl whitespace-nowrap py-2 px-3 rounded-full border border-transparent hover:border-blue-700 bg-blue-700 hover:bg-transparent text-white hover:text-blue-700 dark:hover:text-white dark:hover:border-white group'>
              Download PDF
            </Link>
            <Link href='/VICTOR_OKOYE.pdf' target="_blank"  className='shadow-xl whitespace-nowrap py-2 px-3 rounded-full border border-transparent hover:border-blue-700 bg-blue-700 hover:bg-transparent text-white hover:text-blue-700 dark:hover:text-white dark:hover:border-white group'>
              View PDF
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
