import React, { useEffect, useRef, useState } from 'react'
import Button from './Button';
import emailjs from '@emailjs/browser';
import { Mobile, Desktop } from '../styles/ContactStyles';
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const Contact = () => {

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
    
  //   for the form
  const formRef = useRef();
    
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formRef.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  const sentEmail = () => { toast.success(`🎉 Your message has been sent!`); }
      
  return (
    <section>
        {
            isMobile ?
            (
                <Mobile className='container'>
                    <>
                        <ToastContainer
                            theme='dark'
                            position='top-right'
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            draggable={false}
                            pauseOnHover={false}
                            pauseOnFocusLoss={false}
                        />
                    </>
                    <div className="form-container">
                    <h1>Contact Us</h1>
                        <form ref={formRef} onSubmit={sendEmail}>
                            <div className="input-container">
                                <p className='label-input'>
                                    <label htmlFor="" className='label'>FullName</label> <br />
                                    <input type="text" name='username' placeholder='Victor Happy' required />
                                </p>
                                <p className='label-input'>
                                    <label htmlFor="" className='label'>Email Address</label> <br />
                                    <input type="email" name='email' placeholder='example@example.com' required />
                                </p>
                                <p className='label-input'>
                                    <label htmlFor="" className='label'>Subject</label> <br />
                                    <input type="text" name='subject' placeholder='Heading of your mail' required />
                                </p>
                                <p className='label-input'>
                                    <label htmlFor="" className='label'>Message</label> <br />
                                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Write your message here...' required></textarea>
                                </p>
                            </div>
                            <Button primary type="submit" onClick={sentEmail} style={{width: '312px',  marginBottom: '50px'}}>Send</Button>
                        </form>
                    </div>    
                </Mobile>
            )
            :
            (
                <Desktop className='container'>
                    <>
                        <ToastContainer
                            theme='dark'
                            position='top-right'
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            draggable={false}
                            pauseOnHover={false}
                            pauseOnFocusLoss={false}
                        />
                    </>
                    <div className="form-container">
                        <form ref={formRef} onSubmit={sendEmail}>
                            <h1>Contact Us</h1>
                            <div className="input-container">
                                <p className='label-input'>
                                    <label htmlFor="" className='label'>FullName</label> <br />
                                    <input type="text" name='username' placeholder='Victor Happy' required />
                                </p>
                                <p className='label-input'>
                                    <label htmlFor="" className='label'>Email Address</label> <br />
                                    <input type="email" name='email' placeholder='example@example.com' required />
                                </p>
                                <p className='label-input'>
                                    <label htmlFor="" className='label'>Subject</label> <br />
                                    <input type="text" name='subject' placeholder='Heading of your mail' required />
                                </p>
                                <p className='label-input'>
                                    <label htmlFor="" className='label'>Message</label> <br />
                                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Write your message here...' required></textarea>
                                </p>
                            </div>
                            <Button primary type="submit" onClick={sentEmail} style={{width: '357px'}}>Send</Button>
                        </form>
                    </div>    
                </Desktop>
            )
        }
    </section>
  )
}


export default Contact;
