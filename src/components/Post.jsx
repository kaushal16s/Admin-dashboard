import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {edit,trash} from '../assets'
import axios from 'axios';


const Posts = ({post,ed}) => {
  // console.log(post);
  const navigate=useNavigate();
  

  const [clicked,setClicked]=useState(false);
  
  const handleEditClick=()=>{
      navigate(`/user/${post.userId}/posts/edit/${post.id}`);
  }

  const handleDelete = (userid,id)=>{
    console.log(userid,id);
    axios.delete(`https://637de434cfdbfd9a63a00317.mockapi.io/test/v2/users/${userid}/posts/${id}`)
      .then(response => {
        console.log(response.data);
        window.open(`/user/${userid}`, '_self', 'noopener,noreferrer');
        setClicked(false);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleDeleteTrigger =()=>{
    setClicked(!clicked);
  }


  return (
    <div className='flex flex-col justify-between border rounded-lg hover:shadow-2xl shadow-lg p-5 m-5 h-[20rem] w-[20rem] '>
      <div className='flex flex-col w-full border-white-900'>
         <img src={post.avatar} className='flex rounded-full h-16 w-16 bg-stone-600'/> 
        <span className='flex text-2xl font-bold text-left border-b p-5 truncate'>{post?.Title}</span>
        <span className='flex text-lg font-bold text-left p-5'>{post?.content}</span>
      </div>
      {!ed && <div className='flex flex-row items-end justify-end'> 
        <div className='flex p-2 cursor-pointer'><img src={edit} alt={'Edit'} className='flex h-5 w-5 brightness-150 hover:brightness-75' onClick={handleEditClick}/></div>
        <div className='flex p-2 cursor-pointer'><img src={trash} alt={'Delete'} className='flex h-5 w-5 brightness-150 hover:brightness-75' onClick={handleDeleteTrigger}/></div>
      </div>}
      {clicked && <div className='flex z-10 bg-header rounded-2xl shadow-2xl justify-center items-center absolute'>
        <div className='flex flex-col w-[20rem] p-3'>
          <span className='flex text-2xl font-bold'>Are you sure you want to delete this post?</span>
          <div className='flex flex-row'>
            <div className='flex w-10 h-10 border bg-red-600 p-2 mx-5 cursor-pointer' onClick={()=>handleDelete(post.userId,post.id)}>Yes</div>
            <div className='flex w-10 h-10 border bg-blue-500 p-2 mx-5 cursor-pointer' onClick={handleDeleteTrigger}>No</div>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default Posts