import React, { useEffect, useState } from 'react'
import { YouTube_API_KEY } from './utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const VideoContainer = () => {
  const[videos, setVideos] = useState([]);


  useEffect(()=>{
    getVideos();
  },[])

  const getVideos =async()=>{
    const data = await fetch(YouTube_API_KEY);
    const json = await data.json();
    setVideos(json.items)
  }

  return (videos.length === 0 ? (
    <Shimmer />):
    <div className='flex flex-wrap content-center justify-center pl-3 w-76 '>
    {videos.map((video)=>(
      <Link to={"/watch?v="+ video.id}><VideoCard key={video.id} info={video}/></Link>
      ))}
    </div>
  )
}

export default VideoContainer