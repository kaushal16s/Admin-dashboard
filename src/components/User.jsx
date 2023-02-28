import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {edit,trash} from '../assets'

import axios from 'axios';

const User = ({user,ed}) => {
  
  // console.log(user);
  const navigate=useNavigate();
  const [clicked,setClicked]=useState(false);
  
  const handleClick=(id)=>{
    console.log(clicked);
    if(!clicked)
    {

      navigate(`/user/${id}`);
    }
  }

  const handleDelete = (id)=>{
    axios.delete(`https://637de434cfdbfd9a63a00317.mockapi.io/test/v2/users/${id}`)
      .then(response => {
        console.log(response.data);
        window.open('/', '_self', 'noopener,noreferrer');
        setClicked(false);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleDeleteTrigger =()=>{
    setClicked(!clicked);
  }

  const handleEditClick=()=>{
    navigate(`/user/${user.id}/edit`);
}

  return (
    <div className='flex flex-col border rounded-lg hover:shadow-2xl shadow-lg p-5 m-5 h-[27rem] w-[27rem] border-white-900'>
      <div className='flex flex-row' onClick={()=>handleClick(user.id)}>
        <img src={user.avatar} className='flex rounded-full h-14 w-14'/>
        <span className='flex text-2xl font-bold text-left px-6 '>{user.name}</span>
      </div>
      {!ed &&<div className='flex flex-row items-end justify-end'>
        <div className='flex p-2 cursor-pointer'><img src={edit} alt={'Edit'} className='flex h-5 w-5 brightness-150 hover:brightness-75'  onClick={handleEditClick}/></div>
        <div className='flex p-2 cursor-pointer'><img src={trash} alt={'Delete'} className='flex h-5 w-5 brightness-150 hover:brightness-75' onClick={handleDeleteTrigger}/></div>
      </div>}
      {clicked && <div className='flex z-10 bg-header rounded-2xl shadow-2xl justify-center items-center absolute '>
        <div className='flex flex-col w-[20rem] p-3'>
          <span className='flex text-2xl font-bold'>Are you sure you want to delete {user.name}?</span>
          <div className='flex flex-row'>
            <div className='flex w-10 h-10 border bg-red-600 p-2 mx-5 cursor-pointer' onClick={()=>handleDelete(user.id)}>Yes</div>
            <div className='flex w-10 h-10 border bg-blue-500 p-2 mx-5 cursor-pointer' onClick={handleDeleteTrigger}>No</div>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default User