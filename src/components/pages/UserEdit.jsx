import React, { useState,useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom';

import axios from 'axios';
import User from '../User';


const UserEdit = () => {
  const params = useParams();
  console.log(params.userid);

  const [user,setUser]=useState([]);
  //const [loading,setLoading] = useState(true);

  const [name,setName] = useState(null);
  const [file,setFile] = useState(null);
  const navigate=useNavigate();

  useEffect(() => {
        fetch(`https://637de434cfdbfd9a63a00317.mockapi.io/test/v2/users/${params.userid}`)
        .then(response => response.json())
        .then(data => {setUser(data); setLoading(false);})
        .catch(error => console.error(error));
    }, []);

    console.log(user);

    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(name,file);
      const newdata={name:name,avatar:file};
      console.log(newdata);
      axios.put(`https://637de434cfdbfd9a63a00317.mockapi.io/test/v2//users/${params.userid}`, newdata)
        .then(response => console.log(response.data))
        .catch(error => console.error(error));
        navigate(`/user/${params.userid}`);
    }

  return (
    <div className='flex flex-col justify-center items-center w-full p-5'>
      {
        loading?
          <div className='flex justify-center items-center w-full h-screen'> 
            {/* <RingLoader color={'#C780FA'} loading={loading} size={150}/> */}
          </div>
        :
        <>
          <div className='flex flex-col justify-center items-center w-full'>
            <div className='flex  py-10'>
              <span className='flex text-3xl font-bold font-poppins'>Edit Post</span>
            </div>

            <div className='flex py-10'>
              <span className='flex'><User user={user} ed={true}/></span>
            </div>
          </div>

          <div className='flex flex-col '>
            <form onSubmit={(e)=>handleSubmit(e)}>
              <span className='flex text-xl font-bold font-poppins'>Enter Name:</span>
              <input type={'text'} placeholder={'Name'} className='flex m-3 rounded-xl p-3' onChange={(e)=>setName(e.target.value)} required/>
              <span className='flex text-xl font-bold font-poppins'>Enter File:</span>
              <input type={'text'} placeholder={'File URL'} className='flex m-3 rounded-xl p-3' onChange={(e)=>setFile(e.target.value)} required/>

              <input type={'submit'} className='flex bg-white p-3'/>
            </form>
          </div>
        </>
      }
    </div>
  )
}

export default UserEdit