import React, { useEffect } from 'react';
import MainVideo from '../images/spline.webm';
import "./CoverVideo.css";
import img1 from '../images/1.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const CoverVideo = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div className='video-container'>
            <div className='title-container' >
                <div className='div-side'>
                    <h1 className='curse'>N</h1>
                    <h1 className='curse'>o</h1>
                    <h1 className='curse'>n</h1>
                    <h1 className='curse'>i</h1>
                    <h1 className='curse'>k</h1>
                    <h1 className='curse'>o</h1>
                    <h1 className='curse'>t</h1>
                    <h1 className='curse'>i</h1>
                    <h1 className='curse'>n</h1>
                </div>
                <h2 className='esperer'>Umid qilmoq.Ishonmoq</h2>
            </div>
            <video src={MainVideo} autoPlay loop muted />
            <div className='logo-navbar' data-aos="fade-left">
                <img src={img1}
                    enableBackground="new 0 0 24 24"
                    height="88px"
                    viewBox="0 0 24 24"
                    width="88px"
                    fill="none" alt=""
                     />
            </div>
        </div>
    )
}

export default CoverVideo
