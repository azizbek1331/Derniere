import React, { useEffect, useState } from 'react';
import "./Showcase.scss"
import MainVideo from '../images/spline-fistt.mp4';
import Navbar from './Navbar';
import About from './About';
import Publicite from './Publicite'
import Animationslider from './Animationslider'
import Composition from './Composition'
import VideoCarousel from './Video-Carousel'
import Edge from './Edge'
import Order from './Order';
import Container from './Container'
import Loader from './Loader';

const Showcase = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {

        setTimeout(() => {
            setLoaded(true);
        }, 3000)
    }, []);
    return (
        <div id='showcase-section'>
            {loaded ? null : <Loader />}
            <Navbar />
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
            <Container />
            <About />
            <Publicite />
            <Animationslider />
            <Composition />
            <VideoCarousel />
            <Edge />
            <Order />
        </div>
    )
}

export default Showcase
