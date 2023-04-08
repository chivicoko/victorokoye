import React, { useEffect, useState } from 'react';
import { Mobile, Desktop } from '../styles/NavStyles';
import { Link } from 'react-router-dom';

const Nav = () => {
  
  // getting the screen size; specifically checking whether it's mobile
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
  setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
  function handleResize() {
  setWindowDimension(window.innerWidth);
  }

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 640;


  return (
    <section>
      {
        isMobile ?
        (
          <Mobile>
            <h1>Everyday is for <em>Learning</em> and <em>Practicing</em></h1>
            <div>
                <Link to={'/'} style={{textDecoration: 'none', color: 'black'}}><span>Home</span></Link>
                <Link to={'/ContactVictorOkoye'} style={{textDecoration: 'none', color: 'black'}}><span>Contact</span></Link>
            </div>
            <hr />
          </Mobile>
        )
        :
        (
          <Desktop>
            <h1 style={{fontSize: '40px', marginTop: '0'}}>Everyday is for <em>Learning</em> and <em>Practicing</em></h1>
            <div className='links'>
                <Link to={'/'} style={{textDecoration: 'none', color: 'black'}}><span>Home</span></Link>
                <Link to={'/ContactVictorOkoye'} style={{textDecoration: 'none', color: 'black'}}><span>Contact</span></Link>
            </div>
            <hr />
          </Desktop>
        )
      }
    </section>
    
  )
}

export default Nav;