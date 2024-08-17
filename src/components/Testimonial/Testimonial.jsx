import React from 'react';
import clientImg1 from '../../assets/images/client1.jpg';
import clientImg2 from '../../assets/images/client2.jpg';

import './Testimonial.css';
import { useState } from 'react';

const Testimonial = () => {

    const customer=[
        {
            name:'Mr. Ratan Mehra',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores laboriosam, sequi ex consectetur itaque consequatur!',
            image: clientImg1 ,
            designation: 'BoringRoad Patna'
        },
        {
            name:'Mr. Amit kumar',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores laboriosam, sequi ex consectetur itaque consequatur!',
            image: clientImg2 ,
            designation: 'Patliputra Patna'
        }
    ]

    const [activeUser,setActiveUser]= useState(0);

    function handlePreButton(){
        console.log('pre button is clicked');
        setActiveUser((prevalue)=>((prevalue-1+ customer.length)%customer.length))
        
    }
    function handleNextButton(){
        console.log('Next button is clicked');
        setActiveUser((prevalue)=>((prevalue+1+ customer.length)%customer.length))
        
    }

  return (
    <div className='Testimonial-section'>
        <div className="feedback-Container">
            {
                customer.map((feedback,index)=>
                    <div key={index} className={`feedback-card ${index === activeUser?'active':''}`}>
                        <p className="feed-para">{feedback.text}</p>
                        <h2>{feedback.name}</h2>
                        <p className="destination">{feedback.designation}</p>
                    </div>
                )
            }
        </div>
        <div className="userImage">
            {customer.map((custom,index)=>
                <img
                 key={index}
                 src={custom.image} 
                 alt={custom.index}
                  className={`user ${index === activeUser?'active':''}`}
                 />
            )}
        </div>

      <div className="control-button">
        <button className='ctrl-butt' onClick={()=>{handlePreButton()}}>Pre</button>
        <button className='ctrl-butt' onClick={()=>{handleNextButton()}} >Next</button>
      </div>

    </div>
  )
}

export default Testimonial
