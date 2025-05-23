import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faShieldHalved, faChartArea } from '@fortawesome/free-solid-svg-icons';
import './Home.css'
import bannnerImg from '../../assests/banner/banner-img.jpg';

export default function Home() {

    // Icons
    const faChartIcon = <FontAwesomeIcon icon={faChartLine} />
    const faShieldIcon = <FontAwesomeIcon icon={faShieldHalved} />
    const faChartAreaIcon = <FontAwesomeIcon icon={faChartArea} />

  return (
    <>
    <section id="home">
        <div className="banner_image"></div>
        <div className="container">
            <div className="banner_outer">
                <div className="col">
                    <div className="upper">  
                    <h3 className="title">
                        WE PROMOTE YOUR <span>BUSINESS</span>
                    </h3>
                    <p>Nemo enim ipsam oluptatem quia reoluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eosqui ratione.</p>
                    <div className="btn_wrapper">
                        <a className="btn" href="/">Get Started</a>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="sub_banner_image">
                        <img className="img" src={bannnerImg}/>
                    </div>
                    <div className="banner_style_1">
                        {faChartIcon}
                        <h4>Bubsiness Analysis</h4>
                    </div>
                    <div className="banner_style_1 banner_style_2">
                        {faShieldIcon}
                        <h4>99.9% Success</h4>
                    </div>
                    <div className="banner_style_1 banner_style_3">
                        {faChartAreaIcon}
                        <h4>Strategy</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}