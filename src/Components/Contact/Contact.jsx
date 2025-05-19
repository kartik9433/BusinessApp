import React from 'react'
import ContactImage from '../../assests/contact/contact.jpg'
import'./Contact.css'

function Contact() {
  return (
    <>
      <section id='contact'>
          <div className="container">
            <div className="contact_wrapper">
                    <div className="contact_col">
                        <div className="contact_image"> 
                            <img src={ContactImage} alt="contact" />
                        </div>
                    </div>
                     <div className="contact_col">
                        <h2>Contact US</h2>
                         <form >
                              <div className="input_wrapper">
                                <input type="text"  className='form_control' placeholder='Your name...' aria-autocomplete='off' />
                              </div>
                              <div className="input_wrapper">
                                <input type="text"  className='form_control' placeholder='Your Phone...' aria-autocomplete='off' />
                              </div>
                              <div className="input_wrapper">
                                <input type="email"  className='form_control' placeholder='Your Email...' aria-autocomplete='off' />
                              </div>
                              <div className="input_wrapper">
                                <textarea placeholder='Write a Message..'></textarea>
                              </div>
                              <div className='btn_wrapper'>
                                <button type='submit' className='btn'>
                                    Submit
                                </button>
                              </div>
                         </form>
                    </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default Contact
