import React, { useState } from 'react';
import './Order.scss';
import axios from 'axios';
// import img1 from 'https://iconscout.com/svg-editor?state=XQAAAALTAAAAAAAAAABt__34xfyFBy-oC3cVZudooFmAKFvw312q_xYlrnQO6KAPomQUY4Zq41LYrhLQnb4RCUxcwldkXey7CItpbtpSjtC4JAur7Yts3OhI8xwhfagfvzQ8F-9LKRaPef3kgDDDQpMjPxamialdlcSqc_rLttpx0iGgsPDD1ng7lVWYhAYgU12uQxq0yayelBRvkes06JwUUj3EafzURodyl4Ezv5WhZgBI0J6M-Dm73cH3d7Nogm2sJvUD5hwph9HYDt2Y2GQl_7FeQAA '
const Order = () => {
    const [showModal, setShowModal] = useState(false);
    const data = { name: "", phone_number: "" };
    const [inputData, setInputData] = useState(data);
    const handleData = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        axios.post("https://newpro-4ft2.onrender.com/nika/contact-create", inputData)
            .then((response) => {
                console.log(response);
            })
        inputData.name = '';
        inputData.phone_number = '';
        setShowModal(!showModal);
    }
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className='Order'>
            <div className="Order-carnet">
                <h1>Ma’lumotlaringiz sir saqlanishi kafolatlanadi, malakali mutahasislarimiz Siz bilan doim aloqada bo’lib natijaga olib chiqishadi.</h1>
                <p>Bepul konsultatsiya olmoqchimisiz?</p>
            </div>
            <div className="Order-data">
                <form onSubmit={handleSubmit} >
                    <div className="input-head">
                        <input required="required" placeholder='  Ismingiz' type="text" name='name' value={inputData.name} onChange={handleData} />
                        <input required="required" placeholder='  Raqamingiz' type="tel" name='phone_number' value={inputData.phone_number} onChange={handleData} />
                        <select required>
                            <option value="Toshkent shahri">Toshkent shahri</option>
                            <option value="Andijon">Andijon</option>
                            <option value="Buxoro">Buxoro</option>
                            <option value="Farg'ona">Farg'ona</option>
                            <option value="Jizzax">Jizzax</option>
                            <option value="Xorazm">Xorazm</option>
                            <option value="Namangan">Namangan</option>
                            <option value="Navoiy">Navoiy</option>
                            <option value="Qashqadaryo">Qashqadaryo</option>
                            <option value="Qoraqalpog'iston Respublikasi">Qoraqalpog'iston Respublikasi</option>
                            <option value="Samarqand">Samarqand</option>
                            <option value="Sirdaryo">Sirdaryo</option>
                            <option value="Surxondaryo">Surxondaryo</option>
                            <option value="Toshkent">Toshkent</option>
                        </select>
                    </div>
                    <button className='btn' >Bepul konsultatsiya olish</button>
                </form>
                <hr />
                <div className="last-section">
                    <div className="phone">
                        <h2>Phone</h2>
                        <p>+916392299587</p>
                    </div>
                    <div className="phone">
                        <h2>Address</h2>
                        <p className='title-address'>88 D/4  Sulem Sarai,
                            Prayagraj, India</p>
                    </div>
                    <div className="phone">
                        <h2>Email</h2>
                        <p>p.abhishek.0007@gmail.com</p>
                    </div>
                    <div className="phone-social">
                        <h2>Social Media</h2>
                        <div className="social">
                            <a href="https://www.instagram.com/nonikotin/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D">
                                <img width="30" height="30" src="https://img.icons8.com/ios/50/FFFFFF/instagram-new--v1.png" alt="instagram-new--v1" />
                            </a>
                            <a href="https://t.me/nonikotin_1">
                                <img width="30" height="30" src="https://img.icons8.com/ios/50/FFFFFF/telegram.png" alt="telegram" />
                            </a>
                            <a href="https://m.facebook.com/people/Nonikotin/100092533365424/">
                                <img width="30" height="30" src="https://img.icons8.com/ios/50/FFFFFF/facebook-new.png" alt="facebook-new" />
                            </a>
                        </div>
                    </div>
                </div>
                {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <button className="close-x" onClick={toggleModal}>X</button>
                            <svg width="50" height="50" fill="#62C584"> <path d="M25.1 49.28A24.64 24.64 0 0 1 .5 24.68 24.64 24.64 0 0 1 25.1.07a24.64 24.64 0 0 1 24.6 24.6 24.64 24.64 0 0 1-24.6 24.61zm0-47.45A22.87 22.87 0 0 0 2.26 24.68 22.87 22.87 0 0 0 25.1 47.52a22.87 22.87 0 0 0 22.84-22.84A22.87 22.87 0 0 0 25.1 1.83z"></path> <path d="M22.84 30.53l-4.44-4.45a.88.88 0 1 1 1.24-1.24l3.2 3.2 8.89-8.9a.88.88 0 1 1 1.25 1.26L22.84 30.53z"></path> </svg>
                            <h3>Rahmat
                                Ma'lumotlaringiz qabul qilindi!!
                            </h3>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Order
