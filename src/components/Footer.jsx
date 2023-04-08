import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Desktop, Mobile} from '../styles/FooterStyles';
import WhatsApp from '../assets/wa2.jpg';
import LinkedIn from '../assets/in1.png';
import GitHub from '../assets/github1.png';
import Twitter from '../assets/twitter2.png';
// import { GitHub, Twitter, Linkedin } from "react-feather";


const Footer = () => {
  
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
            <hr />
            <span className='resume'>
                <Link to={'https://docs.google.com/document/d/12ezKKHZeIyqXSwMDrRIDTeF7nWO9eSTslCHXF2TQagI/edit?usp=sharing'} target={'_blank'} style={{textDecoration: 'none', color: 'black'}}>
                    <strong>Resumé</strong>
                </Link>
            </span>
            <span className='socials'>
                <span><Link to={'https://github.com/chivicoko'} target={'_blank'}><img src={GitHub} alt="" /></Link></span>
                <span><Link to={'https://linkedin.com/in/victor-okoye-chibuzo/'} target={'_blank'}><img src={LinkedIn} alt="" /></Link></span>
                <span><Link to={'https://wa.me/+2348028845693'} target={'_blank'}><img src={WhatsApp} alt="" /></Link></span>
                <span><Link to={'https://twitter.com/chivicoko'} target={'_blank'}><img src={Twitter} alt="" /></Link></span>
            </span>
          </Mobile>
        )
        :
        (
          <Desktop>
            <hr />
            <span className='resume'>
                <Link to={'https://docs.google.com/document/d/12ezKKHZeIyqXSwMDrRIDTeF7nWO9eSTslCHXF2TQagI/edit?usp=sharing'} target={'_blank'} style={{textDecoration: 'none', color: 'black'}}>
                    <strong>Resumé</strong>
                </Link>
            </span>
            <span className='socials'>
                <span><Link to={'https://github.com/chivicoko'} target={'_blank'}><img src={GitHub} alt="" /></Link></span>
                <span><Link to={'https://linkedin.com/in/victor-okoye-chibuzo/'} target={'_blank'}><img src={LinkedIn} alt="" /></Link></span>
                <span><Link to={'https://wa.me/+2348028845693'} target={'_blank'}><img src={WhatsApp} alt="" /></Link></span>
                <span><Link to={'https://twitter.com/chivicoko'} target={'_blank'}><img src={Twitter} alt="" /></Link></span>
            </span>
          </Desktop>
        )
      }
    </section>
  
  )
}

export default Footer;