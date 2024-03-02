import ReactPlayer from 'react-player';
import "./Video-Carousel.scss";
import vide1 from '../images/w1.mp4';
import Typewritter from './Type-Writter';
// import Aos from 'aos';
// import 'aos/dist/aos.css';
import { useEffect } from 'react';


const VideoCarousel = () => {
    // useEffect(() => {
    //     Aos.init({ duration: 2000 });
    // })
    return (
        <div className="ondiv-main">
            <div className="carnet"></div>
            <div className="carnette"></div>
            <div className="carnetette"></div>
            <div className="union-upwards">
                <ReactPlayer className="player" url="https://youtu.be/e9twIEqyWMQ?si=mWWflKYB4VAaAMVf" controls={true} pip={true} playing={false} loop muted />
                <Typewritter />
            </div>
        </div>
    )
}

export default VideoCarousel;