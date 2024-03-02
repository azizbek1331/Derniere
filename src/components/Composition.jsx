import React, { useEffect } from 'react'
import img1 from '../images/f8.png'
import img2 from '../images/f9.png'
import img3 from '../images/f10.png'
import './Composition.scss'
// import Aos from "aos";
// import 'aos/dist/aos.css';

const Composition = () => {
    // useEffect(() => {
    //     Aos.init({ duration: 2000 });
    // });
    return (
        <div className='card-main'>
            <div className="outer" data-aos="fade-right">
                <h1>Tarkibi</h1>
            </div>
            <div className="overlay-section">
                <div className="overlay-first"></div>
                <div className="overlay-second"></div>
            </div>
            <div className="card-option" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="card">
                    <img src={img1} className="card-img" alt="" />
                </div>
                <div className="card-descr">
                    <h1>UDI Kurka o`ti</h1>
                    <p className='plant-first'>Allergik astma,rinit kabinafas olish kasalliklarining alomatlarini yengillashtirad.Tomoq og`rig`i va yo`talni kamaytiradi.Immunitetni oshirish orqali kasalliklardan himoya qiladi.UDI kurka o`simligining kukuni asal,zanjabil qora qalampir va zerdechal bilan aralashtirib iste`mol qilish mumkin.Burun bo`shlig`ida muammosi borlar uchun samarali.Tonzilit va umumiy yallig`lanish haqida gap ketganda,UDI kurka o`ti samarali bo`ladi.</p>
                </div>
            </div>
            <div className="card-options" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="card-second">
                    <img src={img2} className="card-photo" alt="" />
                </div>
                <div className="card-descr">
                    <h1>Qorabosh o`ti</h1>
                    <p className='plant-first'>Bu nafas olish kasaliklari va balg`am chiqarish belgilarini kamaytirishga yordam beradi.Tinchlantiruvchi va bo`shashtiruvchi ta`siri tufayli qulay uyqu uchun afzalliklari bor.Tarkibidagi vitaminlar,minerallar va antikosidant moddalar immunitet tizimini qo`llab-quvvatlaydi.</p>
                </div>
            </div>
            <div className="card-muted" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="card">
                    <img src={img3} className="card-peinture" alt="" />
                </div>
                <div className="card-description">
                    <h1>Qora qalampir o`ti</h1>
                    <p className='plant-first'>Ushbu o`simlik tufayli chekish istagi kundan-kunga kamayadi va tugaydi.Odatda u ko`pchilik miya kasalliklarini davolashda qo`llaniladi.Sinusit yo`tal,surunkali sovuq va isitmani davolashda qo`llaniladi.Bu depressiya va tashvish belgilarining oldini oladi va yengillashtiradi.Bosh og`rig`i va migrenni davolash uchun boshqa o`tlar bilan birgalikda qo`llaniladi.</p>
                </div>
            </div>
        </div>
    )
}
export default Composition
