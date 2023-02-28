import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import User from '../User';



import { add } from '../../assets';


const Home = () => {

  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    fetch('https://637de434cfdbfd9a63a00317.mockapi.io/test/v2/users')
      .then(response => response.json())
      .then(data => {setData(data); setLoading(false);})
      .catch(error => console.error(error));
  }, []);
  console.log(data);

  const navigate=useNavigate();
  const handleSubmit=()=>{
    navigate(`/adduser`);
  }

  return (
    <div className='flex flex-col w-full justify-center items-center p-5 '>  
      {
        loading?
          <div className='flex justify-center items-center w-full h-screen '> 
            {/* <RingLoader color={'#C780FA'} loading={loading} size={150}/> */}
          </div>
        :
        <>
          <div className='flex  py-10 backdrop-blur-sm'>
            <span className='flex text-4xl font-bold font-poppins'>Users</span>
          </div>
           <div className='flex flex-wrap border-double shadow-2xl  justify-center items-center  py-20 '> 
            {data?.map((user)=>(
              
              <span className='flex bg-gradient-to-r from-violet-500 to-fuchsia-500'><User user={user}/></span>
            ))}
            <div className='flex flex-col border rounded-lg  justify-center items-center hover:shadow-2xl shadow-lg p-5 m-5 h-[10rem] w-[20rem] ' onClick={handleSubmit}>
              <div className='flex rounded-full w-fit bg-gray-50 p-10'>
                <img src={add} className='flex h-16 w-16'/>
              </div>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default Home