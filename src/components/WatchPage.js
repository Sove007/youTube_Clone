import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from './utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(closeMenu());
  },[dispatch]);

  const [searchParams] = useSearchParams();

  return (
    <div className='px-6 py-3 m-2 box '>
      <iframe className='rounded-lg' width="860" height="460" src={"https://www.youtube.com/embed/"+searchParams.get("v") }title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage