import React from 'react'
import './header.css'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          Let's Build Something Amazing with Code Academy
        </h1>
        <p>Technical Challenge: To be done in 72h starting from the time of this email, this will show us your technical skills in action and how well you can adapt to challenges and strict deadlines.</p>
        <div className='gpt3__header-content-input'>
          <input type="email" placeholder='Your Email Address'/>
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content-people'>
          <img src={people} alt="people"/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
        <div className='gpt3__header-image'>
            <img src={ai} alt="Ai"/>
        </div>
      
    </div>
  )
}

export default Header