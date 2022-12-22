import React from 'react'
import Post from '../../components/Post/Post'
import './Posts.css'
const Posts = () => {
  return (
    <div className='posts-container'>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}

export default Posts