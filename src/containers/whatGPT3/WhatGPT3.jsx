import React from 'react'
import { Feature } from '../../components'
import './whatGPT-3.css'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3" text="The interview process we have set up in our company includes 3 phases:" />
      </div>
      <div className='gpt3__whatgpt3-heading'>
       <h1 className='gradient__text'>The possibilities are beyond your imagination</h1> 
       <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Technical Challenge" text="To be done in 72h starting from the time of this email, this will show us your technical skills in action and how well you can adapt to challenges and strict deadlines."  />
        <Feature title="Theoretical Quizzes" text=" If you pass the technical challenge you will be asked to take some technical quizzes about the theory of web development technologies." />
        <Feature title="30m call on Google Meet" text="To assess your communication skills and your level of English." />
      </div>
    </div>
  )
}

export default WhatGPT3