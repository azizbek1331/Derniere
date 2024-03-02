import React from 'react';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';
import './Loader.scss';
// const Container = styled(motion.div)`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   touch-action: none;
//   overflow: hidden;
//   width: 100vw;
//   height: 100vh;

//   z-index: 6;

//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   background-color: black;

//   width: 100%;

//   @media (max-width: 48em) {
//     svg{
//       width: 20vw;
//     }
//   }

//   svg {
//     width: 10vw;

//     height: auto;
//     overflow: visible;
//     stroke-linejoin: round;
//     stroke-linecap: round;
//     g {
//       path {
//         stroke: #fff;
//       }
//     }
//   }
// `;
const Loader = () => {
    return (
        <div className='Loader-container' >
            <div>
                <h1>Xush Kelibsiz!</h1>
            </div>
        </div>
    )
}

export default Loader
