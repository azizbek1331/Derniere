import React, { useEffect } from 'react';
import './Type-Writter.scss';
import img2 from '../images/seedling-solid.svg'
// import img3 from '../images/facebook.svg';
// import img4 from '../images/twitter.svg';
// import img5 from '../images/linkedin.svg';
// import Aos from 'aos';
// import 'aos/dist/aos.css';
function Typewritter() {
    // useEffect(() => {
    //     Aos.init({ duration: 2000 });
    // })
    return (
        <div className='head-type' data-aos="fade-down-right">
            <div className="card-type">
                <div className="logo">
                    <span className="circle circle1"></span>
                    <span className="circle circle2"></span>
                    <span className="circle circle3"></span>
                    <span className="circle circle4"></span>
                    <span className="circle circle5" src={img2}>
                    </span>
                </div>
                <div className="glass">
                    <div className="content">
                        <h1>Batafsil:</h1>
                        <p>Chekish umr zavoli ekanligi haqida ko`p eshitganmiz,lekin nima uchun undan voz kecha olmaymiz?Chunki inson miyasi dastlab qiziqishga chakib ko`rgan tamaki mahsulotiga bora-bora qaram bo`lib boradi.Natijada undan qutula olmaydi.Xo`sh,bunday vaziyatda nima qilish kerak?Biz sizga eng yaxshi dori vositasi bo`lgan Nonikotin mahsulotini tavsiya qilamiz.O`zingiz va oilangizni asrashingizga ishonamiz.</p>
                    </div>
                </div>
            </div>
         </div>
    )
}

export default Typewritter