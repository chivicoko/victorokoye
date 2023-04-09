import React, { useEffect, useState } from 'react';
import Button from './Button';
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
                        
                        <span className='resume'>
                            <Link to={'/contactvictorokoye'} style={{textDecoration: 'none'}}><Button><span>Send Me An Email</span></Button></Link>
                        </span>
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
                        
                        <span className='resume'>
                            <Link to={'/contactvictorokoye'} style={{textDecoration: 'none'}}><Button><span>Send Me An Email</span></Button></Link>
                        </span>
                    </div>
                </Desktop>
            )
        }
    </section>
  )
}


export default HomePage;