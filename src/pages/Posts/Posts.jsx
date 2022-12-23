import React from 'react'
import Post from '../../components/Post/Post'
import PostShare from '../../components/PostShare/PostShare'
import './Posts.css'
const Posts = () => {
  return (
    <div className='posts-container'>
        <PostShare/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}

export default Posts