import React,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';


const AddPost = () => {
    const [title,setTitle]=useState(null);
    const [content,setContent]=useState(null);
    const [data,setData]=useState([]);

    const params = useParams();
    const navigate=useNavigate();

    useEffect(() => {
        fetch(`https://637de434cfdbfd9a63a00317.mockapi.io/test/v2/users/${params.userid}`)
        .then(response => response.json())
        .then(data => {setData(data);})
        .catch(error => console.error(error));
    }, []);

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(title,content);
        const data={Title:title,content:content};
        axios.post(`https://637de434cfdbfd9a63a00317.mockapi.io/test/v2/users/${params.userid}/posts`, data)
        .then(response => console.log(response));
        navigate(`/user/${params.userid}`);
    }
  
    return (
    <div className='flex flex-col w-full justify-center items-center p-5'>
        <div className='flex flex-col py-10 justify-center items-center'>
            <span className='flex text-3xl font-bold underline font-poppins py-5'>{data.name}</span>
            <span className='flex text-3xl font-bold font-poppins py-5'>Edit Posts</span>
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
    </div>
  )
}

export default AddPost