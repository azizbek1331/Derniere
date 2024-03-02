import React, { useEffect } from 'react';
import './About.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        Aos.init({duration:3000});
    }, []);
    return (
        <div className='about' >
            <div className="about-left" >
                <h1 data-aos="fade-left">Biz haqimizda</h1>
                <p data-aos="fade-up">
                    Bizning jamoa 3+ yildan beri faoliyatda va 200 mijozlar ishonchini oqlab keldi.
                    Bizning mahsulot sizning tamakiga nisbatan bo'lgan fikrlaringizni buzadi.
                    Biz sizga noyob mahsulot taqdim etish niyatidamiz. Tamakiga qarshi kurashish-bu hamma tushunmaydigan yondashuv.
                   
                    <br />
                    Biz mahsulotimizni tayyorlashga juda qattiq bel bog'ladik va sizga tamakiga bo'lgan qaramlikni yenguvchi mahsulotimizni taklif etamiz.Keng doiradagi insonlarga noyob va ijodiy mahsulotimizni namoyon qilamiz.Bizda turli-xil uslublar mavjud,ammo ko'pchilik uchun barcha variant shu yerda.
                    <br />
                    <br />
                    Biz sizni baxtli qiladigan narsalarni tayyorlashga ixtisoslashganmiz va o`z an'analarimizga asoslanishga intilamiz.
                </p>
            </div>
            <div className="about-right">
                <img data-aos="fade-right" src="https://images.pexels.com/photos/8344696/pexels-photo-8344696.jpeg?auto=compress&cs=tinysrgb&w=600" alt="About Us" className="small-img-3 " />
                <img src="https://media.istockphoto.com/id/1346125184/photo/group-of-successful-multiethnic-business-team.jpg?b=1&s=612x612&w=0&k=20&c=bnPzFSe0OyDihobiURlo5COABCMY2tMP3dg56EMkizc=" className="small-img-1" alt="About Us" />
                <img src="https://media.istockphoto.com/id/863497498/photo/i-need-everyone-to-give-me-their-best-ideas.jpg?b=1&s=612x612&w=0&k=20&c=fC4bPeEjxlfbCRH3qI-F5rvkCoCi4DrxmWCdklfUtL8=" className="small-img-2" alt="About Us" />  
            </div>
        </div>
    )
}

export default About;