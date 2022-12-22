import React from 'react'
import './Post.css'
import {BsBookmark} from 'react-icons/bs'
import {GoComment} from 'react-icons/go'
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
                    <div className="btn-wrapper">
                    <button>👍</button>
                    <p>11 likes</p>
                    </div>
                    <div className="btn-wrapper">
                    <button>👎</button>
                    <p>11 dilikes</p>
                    </div>
                    <div className="btn-wrapper">
                    <button><GoComment/></button>
                    <p>comment</p>
                    </div>
                    <div className="btn-wrapper">
                    <button><BsBookmark/> </button>
                    <p>saved</p>
                    </div>
                    <button>👎<span>11 dilikes</span></button>                    
                    <button><BsBookmark/> <span>saved</span></button>                    
                    <button><GoComment/>   <span>comment</span></button>                    
                </ul>
            </div>
        </article>
  )
}

export default Post