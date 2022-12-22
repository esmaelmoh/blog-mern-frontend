import React from 'react'
import './Post.css'
import {BsFillBookmarkFill} from 'react-icons/bs'
const Post = () => {
  return (
        <article className='blog-container'>
            <div className="img-container">
                <img src="./blogpic1.jpg" alt="" srcset="" />
            </div>
            <div className="content-container">
                <h3>News</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illo suscipit non ut sed, 
                    iure dolore laudantium et quibusdam error modi maiores animi incidunt omnis veritat\s? 
                    Voluptates eligendi alias esse.</p>
        
            
                <ul>
                    <button>👍<span>11 likes</span></button>
                    <button>👎<span>11 dilikes</span></button>                    
                    <button><BsFillBookmarkFill/><span>saved</span></button>                    
                </ul>
            </div>
        </article>
  )
}

export default Post