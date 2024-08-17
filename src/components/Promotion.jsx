import React from 'react'
import './promotion.css';
import image1 from '../assets/images/f2.png'
import image2 from '../assets/images/f6.png'

const Promotion = () => {
  return (
    <div className='promotions'>
       <div className="promotion-card">
           <img src={image1} alt="burger" />
           <div className="promotion-content">
            <div className="promotion-title">Tasty Thursdays</div>
            <div className="promotion-discount">20% off</div>
            <button className='btn-Order-Now'>Order Now</button>
           </div>
       </div>
       <div className="promotion-card">
           <img src={image2} alt="burger" />
           <div className="promotion-content">
            <div className="promotion-title">Tasty Thursdays</div>
            <div className="promotion-discount">20% off</div>
            <button className='btn-Order-Now'>Order Now</button>
           </div>
       </div>
      
    </div>
  )
}

export default Promotion
