import React, { useState,useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import RingLoader from "react-spinners/RingLoader";
import axios from 'axios';

import { Post } from '..';

const PostEdit = () => {
  const params = useParams();
  console.log(params);

  const [post,setPost] = useState([]);
  const [loading,setLoading] = useState(true);

  const [title,setTitle] = useState(null);
  const [content,setContent] = useState(null);
  const navigate=useNavigate();


  useEffect(() => {
    fetch(`https://637de434cfdbfd9a63a00317.mockapi.io/test/v2/users/${params.userid}/posts/${params.postid}`)
      .then(response => response.json())
      .then(data => {setPost(data); setLoading(false);})
      .catch(error => console.error(error));
  }, []);

    console.log(post);

    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(title,content);
      const data={Title:title,content:content};
      axios.put(`https://637de434cfdbfd9a63a00317.mockapi.io/test/v2//users/${params.userid}/posts/${params.postid}`, data)
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
              <span className='flex'><Post post={post} ed={true}/></span>
            </div>
          </div>

          <div className='flex flex-col '>
            <form onSubmit={(e)=>handleSubmit(e)}>
              <span className='flex text-xl font-bold font-poppins'>Enter Title:</span>
              <input type={'text'} placeholder={'Title'} className='flex m-3 rounded-xl p-3' onChange={(e)=>setTitle(e.target.value)} required/>
              <span className='flex text-xl font-bold font-poppins'>Enter Content:</span>
              <input type={'text'} placeholder={'Content'} className='flex m-3 rounded-xl p-3' onChange={(e)=>setContent(e.target.value)} required/>

              <input type={'submit'} className='flex bg-white p-3'/>
            </form>
          </div>

        </>
      }
    </div>
  )
}

export default PostEdit