import React, { useEffect } from 'react';
import './Publicite.scss';
import img1 from '../images/f11.png';
import img2 from '../images/close (6).png';
import img3 from '../images/check-mark (5).png';
import img4 from '../images/point.png';
// import Aos from 'aos';
import 'aos/dist/aos.css';

const Publicite = () => {
// useEffect(()=>{
// Aos.init({duration:2000});
// },[]);
    return (
        <div className='reclaim' data-aos="fade-down-right">
            <div className="overlay-back"></div>
            <div className="reclaim-main">
                <div className="shirt-button">
                    <img src={img4} alt="" className='button-first' />
                    <img src={img4} alt="" className='button-second' />
                    <img src={img4} alt="" className='button-three' />
                    <div className="button-four">
                        <div className='button'>
                            <a><span>100% Tabiiy</span></a>
                        </div>
                    </div>
                </div>
                <div className="reclaim-begin">
                    <img src={img1} className='reclaim-photo' alt="" />
                </div>
                <div className="reclaim-descr">
                    <h1>Bizning mahsulot</h1>
                    <div className="descr-into">
                        <div className="into-smoke">
                            <div className="svg-commun">
                                <img src={img2} alt="" />
                                <img src={img3} alt="" className='svg-second' />
                            </div>
                            <p>Kashandalik bilan bog`liq psixologik muammolarni <br /> yengishda yordam beradi.</p>
                        </div>
                        <div className="into-smoke">
                            <div className="svg-commun">
                                <img src={img2} alt="" />
                                <img src={img3} alt="" className='svg-second' />
                            </div>
                            <p className='breath'>Quruq yo`tal,tomoq og`rig`i hissiga <br /> qarshi qarshi kurashadi.</p>
                        </div>
                        <div className="into-smoke">
                            <div className="svg-commun">
                                <img src={img2} alt="" />
                                <img src={img3} alt="" className='svg-second' />
                            </div>
                            <p className='breath-depression'>Depressiv holatlarni me`yorlashtiradi.</p>
                        </div>
                        <div className="into-smoke">
                            <div className="svg-parties">
                                <img src={img2} alt="" />
                                <img src={img3} alt="" className='svg-second' />
                            </div>
                            <p className='asthma'>Astma kabi nafas olish kasalliklarining alomatlarini yengillashtiradi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Publicite

