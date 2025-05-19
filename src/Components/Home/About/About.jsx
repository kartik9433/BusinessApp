import React from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faChartPie, faTruckFast,faUserClock,faHouseLaptop,faPhone } from '@fortawesome/free-solid-svg-icons';
import about from '../../../assests/about/about_img.jpg'

function About() {
        const faBusinessTimeIcon = <FontAwesomeIcon icon={faBusinessTime} />
        const faChartPieIcon  = <FontAwesomeIcon icon={faChartPie} />
        const faTruckFastIcon  = <FontAwesomeIcon icon={faTruckFast} />
        const faUserClockIcon  = <FontAwesomeIcon icon={faUserClock} />
        const faHouseLaptopIcon  = <FontAwesomeIcon icon={faHouseLaptop} />
        const faPhoneIcon  = <FontAwesomeIcon icon={faPhone} />

  return (
    <>
        <section id='about'>
          <div className="container">
             <div className="title_headig">
                <h3>Welcome where innovation meets excellence </h3>
                <p>Our mission is to provide top-notch services tailored to your unique needs   </p>
             </div>
              <div className="about_box_wrapper">
                <div className="about_box">
                    <div className="about_icon">
                        {faBusinessTimeIcon}
                    </div>
                    <div className="content ">
                        <h5> Development</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad nemo excepturi tenetur porro nesciunt </p>
                    </div>
                </div>
                 <div className="about_box">
                    <div className="about_icon  blue_icon">
                        {faBusinessTimeIcon}
                    </div>
                    <div className="content">
                        <h5> Integration </h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad nemo excepturi tenetur porro nesciunt </p>
                    </div>
                </div>
                 <div className="about_box">
                    <div className="about_icon green_icon">
                        {faBusinessTimeIcon}
                    </div>
                    <div className="content ">
                        <h5> Branding </h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad nemo excepturi tenetur porro nesciunt </p>
                    </div>
                </div>
              </div>
          </div>
          
          <div className="about_box_detail">
               <div className="about_col">
                   <div className="about_image">
                      <img src={about} alt="" />
                   </div>
                   <div className="img_info_detail">
                       <h6 className='img_info_title'>GET A PRICE QUOTE TODAY!</h6>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quas sequi rerum perspiciatis aperiam vero soluta</p>
                       <a href="/">{faPhoneIcon}<span>1-800-654-3210</span></a>
                   </div>
               </div>
                  <div className="about_col more_space">
                      <h3>We have business skill  that will increase your earning</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione voluptatem quaerat officiis voluptate </p>
                      <div className="grif_info">
                        <div className="icon1">{faUserClockIcon}</div>
                        <div className="detail">
                            <h4>Start your own business in minutes</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit perspiciatis placeat quis praesentium illum </p>
                        </div>
                        <div className="grif_info1">
                        <div className="icon2">{faHouseLaptopIcon}</div>
                        <div className="detail">
                            <h4>Start your business online</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit perspiciatis placeat quis praesentium illum </p>
                        </div>
                      </div>
                      </div>
                   </div>
          </div>

        </section>
    </>
  )
}

export default About
