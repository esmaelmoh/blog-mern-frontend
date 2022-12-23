import React, { useState, useRef } from "react";
import Axios from 'axios'
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";


const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')
  const [catagory,setCagagory] = useState('')

  const handleSubmit = async(e)=>{
      e.preventDefault()
      console.log(content,title,catagory)
      try {
        const blog = await Axios.post('http://localhost:5000/api/blogs/',{title,content,catagory})
        console.log(blog)
      } catch (error) {
        console.log()
      }
  }

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="PostShare">
      <img src='./profilepic.jpg' alt="" />
      <form action="" onSubmit={handleSubmit}>
      <div>
        <input type="text" placeholder="Title..." onChange={(e)=>setTitle(e.target.value)} className="input-title" />
        <textarea type="text" placeholder="What's happening" onChange={(e)=>setContent(e.target.value)} className="textarea" />
        <div className="postOptions">
          <div className="option" 
          >
            <select name="" id="">
              <option value="news">News</option>
              <option value="business">Business</option>
              <option value="science">science</option>
            </select>
              <label htmlFor="">Catagory</label>
          </div>
          <div className="option" 
          onClick={()=>imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          
          <button className="ps-button" type="submit">Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
      {image && (

        <div className="previewImage">
          <UilTimes onClick={()=>setImage(null)}/>
          <img src={image.image} alt="" />
        </div>

      )}


      </div>
      </form>
    </div>
  );
};

export default PostShare;