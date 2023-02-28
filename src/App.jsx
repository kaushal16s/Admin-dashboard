import React,{useState,useEffect} from 'react'
import { Route, Routes, Link } from 'react-router-dom';

import {Home,AddUser,AddPost, Userbio ,UserEdit, PostEdit} from './components'

function App() {
  const [data, setData] = useState([]);

   useEffect(() => {
    fetch('https://637de434cfdbfd9a63a00317.mockapi.io/test/v2/users')
       .then(response => response.json())
       .then(data => setData(data))
       .catch(error => console.error(error));
   }, []);

   console.log(data);
  return (
    <div className='flex flex-col'>
      {/* <div className='flex bg-header px-16 justify-between items-center'>
        <div className='flex text-4xl font-poppins font-bold'>Admin Dashboard</div>
        <div className='flex text-xl font-poppins font-semibold'>
          <span className='flex px-5'>Developed by Vignaraj</span>
          <span className='flex px-5 hover:text-white'><Link to={'/users'}>Users</Link></span>
          <span className='flex px-5 hover:text-white'><Link to={'/'}>Posts</Link></span>
        </div>
      </div> */}
 <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-500 mb-3">
    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
     <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
      <a className="text-lg font-bold leading-relaxed inline-block mr-4 py-5 whitespace-nowrap uppercase text-white justify-center align-item" href="#pablo"><marquee>
        ADMIN-DASHBOARD </marquee>
      </a>
      <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
        <span className="block relative w-6 h-px rounded-sm bg-white"></span>
        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
      </button>
    </div>
    </div>
    </nav>

    <div>
      
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/user/:userid' element={<Userbio/>}/>
          {/* <Route path='/user/:userid/posts' element={<Post/>}/>  */}
          <Route path='/user/:userid/edit' element={<UserEdit/>}/>
          <Route path='/user/:userid/posts/edit/:postid' element={<PostEdit/>}/>
          <Route path='/adduser' element={<AddUser/>}/>
          <Route path='user/:userid/addpost' element={<AddPost/>}/>
          
        </Routes>

        </div>
      
    </div>
  )
}

export default App
