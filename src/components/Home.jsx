import React, { useEffect, useState } from 'react';
import VictorImage from '../assets/VictorImage.jpg';
import { Link } from 'react-router-dom';
import { Mobile, Desktop } from '../styles/HomeStyles';

const HomePage = () => {

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
                <Mobile className='container'>
                    <div className='img'>
                        <img src={VictorImage} alt="Victor Okoye" className='img' style={{height: '300px'}} />
                    </div>
                    <div className='textContainer'>
                        <h4>Hi,
                            <br />
                            My name is Victor Chibuzo Okoye.
                            <br />
                            I am a Software Engineer, of close to half a decade.
                            <br />
                            I am very passionate about solving real world problems and creating systems that facilitate life experiences.
                        </h4>
                        
                        <Link to={'/ContactVictorOkoye'} style={{textDecoration: 'none'}}>
                            <h3 className='hi'>
                                <span className='hiText'>Send Me An Email</span>
                            </h3>
                        </Link>
                    </div>
                </Mobile>
            )
            :
            (
                <Desktop className='container'>
                    <div className='img'>
                        <img src={VictorImage} alt="Victor Okoye" className='img' />
                    </div>
                    <div className='textContainer'>
                        <h4>Hi,
                            <br />
                            My name is Victor Chibuzo Okoye.
                            <br />
                            I am a Software Engineer, of close to half a decade.
                            <br />
                            I am very passionate about solving real world problems and creating systems that facilitate life experiences.
                        </h4>
                        
                            <h3 className='hi'>
                        <Link to={'/ContactVictorOkoye'} style={{textDecoration: 'none', textAlign: 'center'}}>
                                <span className='hiText'>Send Me An Email</span>
                        </Link>
                            </h3>
                    </div>
                </Desktop>
            )
        }
    </section>
  )
}


export default HomePage;