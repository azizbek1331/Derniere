import React, { useEffect } from 'react';
import img1 from '../images/1.png';
import './Animationslider.scss';
// import Aos from 'aos';
// import 'aos/dist/aos.css';

const Animationslider = () => {
    // useEffect(()=>{
    //     Aos.init({duration:2000})
    // })
    return (
        <div className="box-main" data-aos="zoom-in-left">
            <div className='box'>
                <span style={{ '--i': 1 }}><img src={img1} alt="" /></span>
                <span style={{ '--i': 2 }}><img src={img1} alt="" /></span>
                <span style={{ '--i': 3 }}><img src={img1} alt="" /></span>
                <span style={{ '--i': 4 }}><img src={img1} alt="" /></span>
                <span style={{ '--i': 5 }}><img src={img1} alt="" /></span>
                <span style={{ '--i': 6 }}><img src={img1} alt="" /></span>
                <span style={{ '--i': 7 }}><img src={img1} alt="" /></span>
                <span style={{ '--i': 8 }}><img src={img1} alt="" /></span>
            </div>
        </div>
    )
}

export default Animationslider
