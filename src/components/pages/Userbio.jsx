import React,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import { Post } from '..';


import { add } from '../../assets';


const UserProf = () => {
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const userid = useParams();
    // console.log(userid.userid);

    useEffect(() => {
        fetch(`https://637de434cfdbfd9a63a00317.mockapi.io/test/v2/users/${userid.userid}`)
        .then(response => response.json())
        .then(data => {setData(data); setLoading(false);})
        .catch(error => console.error(error));
    }, []);

    // console.log('data',data?.recent_posts);

    const navigate=useNavigate();
    const handleSubmit=()=>{
        // console.log(id);
        navigate(`/user/${userid.userid}/addpost`);
    }
    
    return (
        <div className='flex flex-col justify-center items-center w-full p-5 '>
        {
        loading?
          <div className='flex justify-center items-center w-full h-screen '> 
            {/* <RingLoader color={'#C780FA'} loading={loading} size={150}/> */}
          </div>
        :
        <>
            <div className='flex p-20 bg-stone-600'>
                <span className='flex text-3xl font-poppins font-bold'>{data.name}</span>
            </div>
            <div className='flex p-20 '>
                <img src={data.avatar} className='flex h-75 w-75 rounded-lg'/>
            </div>
            <div className='flex p-10'>
                <span className='flex text-3xl font-poppins font-bold'>Recent Posts</span>
            </div>
            <div className='flex flex-wrap border shadow-2xl bg-red justify-center items-center rounded-3xl py-500'>
                {data?.recent_posts?.map((user)=>(
                    <span className='flex'><Post post={user}/></span>
                ))}
                <div className='flex flex-col border-lg justify-center items-center hover:shadow-2xl shadow-lg p-2 m-2 h-[10rem] w-[10rem]' onClick={handleSubmit}>
                    <div className='flex rounded-full w-fit bg-gray-50 p-2'>
                        <img src={add} className='flex h-16 w-16'/>
                    </div>
                </div>
            </div>
        </>
      }
        </div>
    )
}

export default UserProf