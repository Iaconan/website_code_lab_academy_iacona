import React from 'react'
import './blog.css'
import { Article } from '../../components'
import { image, image1, image2, image3, image4} from './imports'


const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
          <h1 className='gradient__text'>A lot is happening, 
We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container-groupA'>
        <Article imgUrl={image} date="Apr 5, 2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className='gpt3__blog-container-groupB'>
        <Article imgUrl={image1} date="Apr 5, 2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={image2} date="Apr 5, 2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={image3} date="Apr 5, 2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={image4} date="Apr 5, 2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
      </div>
    </div>
  )
}

export default Blog