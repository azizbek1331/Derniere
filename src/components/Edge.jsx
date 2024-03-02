import React, { useEffect } from 'react'
import './Edge.scss';
import img2 from '../images/0-solid.svg';
import img3 from '../images/1-solid.svg';
import img4 from '../images/2-solid.svg';
import img5 from '../images/3-solid.svg';
// import Aos from 'aos';
// import 'aos/dist/aos.css';

const Edge = () => {
    // useEffect(() => {
    //     Aos.init();
    // }, []);

    return (
        <div className='advantage'>
            <h1>Bizning afzalliklar</h1>
            <strong>Mahsulot harid qilish sizga nima beradi?</strong>
            <div className='edge-head'>
                <div className="edge-group">
                    <div className='edge-begin' data-aos="fade-down">
                        <div className="begin-into">
                            <img width="50" height="50" src="https://img.icons8.com/ios/50/40C057/teacher.png" alt="teacher" />
                            <h2>Shaxsiy mutaxassisga ega  bo'lasiz!</h2>
                            <p>Mutaxassislarimiz ijobiy natija olganingizga  qadar siz bilan aloqada bo‘lishadi!</p>
                            <div className="numbers">
                                <img src={img2} alt="" className='zero' />
                                <img src={img3} alt="" className='one' />
                            </div>
                        </div>
                    </div>
                    <div className='edge-second' data-aos="fade-right">
                        <div className='second-into'>
                            <img width="50" height="50" src="https://img.icons8.com/ios/50/40C057/headphones.png" alt="headphones" />
                            <h2>Biz mijozlarimizni yaxshi ko`ramiz!</h2>
                            <p>Natija va rozichilik bizning oliy maqsadimiz!</p>
                            <div className="numbers">
                                <img src={img2} alt="" className='zero' />
                                <img src={img4} alt="" className='one' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="edge-suit" data-aos="fade-right">
                    <div className="edge-last">
                        <div className="last-into">
                            <img width="50" height="50" src="https://img.icons8.com/ios/50/40C057/delivery--v1.png" alt="delivery--v1" />
                            <h2>Bepul yetkazib berish xizmati!</h2>
                            <p className='last-text'>Buyurtmadan so`ng mahsulot qisqa vaqt ichida qo`lingizga yetkaziladi.</p>
                            <div className="numbers">
                                <img src={img2} alt="" className='zero' />
                                <img src={img5} alt="" className='one' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edge



