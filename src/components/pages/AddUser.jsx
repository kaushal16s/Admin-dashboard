import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {

    const [name,setName]=useState(null);
    const [avatar,setAvatar]=useState(null);
    const [id,setId]=useState(null);
    const navigate=useNavigate();
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(name,avatar,id);
        const data={name:name,avatar:avatar,id:id};
        axios.post('https://637de434cfdbfd9a63a00317.mockapi.io/test/v2/users', data)
        .then(response => console.log(response));

        navigate('/');
        
    }
  return (
    <div className='flex flex-col w-full justify-center items-center p-5'>
        <div className='flex  py-10 justify-center items-center'>
            <span className='flex text-3xl font-bold font-poppins'>Edit Users</span>
        </div>
        <div className='flex flex-col '>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <span className='flex text-xl font-bold font-poppins'>Enter ID:</span>
                <input type={'text'} placeholder={'ID'} className='flex m-3 rounded-xl p-3' onChange={(e)=>setId(e.target.value)} required/>
                <span className='flex text-xl font-bold font-poppins'>Enter Name:</span>
                <input type={'text'} placeholder={'Name'} className='flex m-3 rounded-xl p-3' onChange={(e)=>setName(e.target.value)} required/>
                <span className='flex text-xl font-bold font-poppins'>Enter File:</span>
                <input type={'text'} placeholder={'File URL'} className='flex m-3 rounded-xl p-3' onChange={(e)=>setAvatar(e.target.value)} required/>

                <input type={'submit'} className='flex bg-white p-3'/>
            </form>
        </div>
    </div>
  )
}

export default AddUser