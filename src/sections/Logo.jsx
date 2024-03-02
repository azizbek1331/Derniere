import React, { useEffect } from 'react';
import './Logo.css';
// import { motion } from 'framer-motion';
import img1 from '../images/1.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        pathLength: 1,

        transition: {
            duration: 2,
            delay: 3,
            ease: 'easeInOut',
        },
    },
};
const Logo = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div className='logo-navbar' data-aos="fade-left">
            <img src={img1}
                enableBackground="new 0 0 24 24"
                height="88px"
                viewBox="0 0 24 24"
                width="88px"
                fill="none" alt=""
                variants={pathVariants} />
        </div>
    )
}

export default Logo
