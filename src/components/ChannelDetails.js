import React, { useEffect, useState } from 'react'
import { channelImage_api } from './utils/constant';
import { abbreviateNumber } from 'js-abbreviation-number';

const ChannelDetails = ({channelId, channelTitle}) => {
  const [details, setDetails] =useState(null);

    useEffect(()=>{
        getChannelImage();
    },[])

   const getChannelImage =async ()=>{
    const data = await fetch(channelImage_api+"&id="+channelId)
    const json = await data.json();
    // console.log(json?.items[0]);
    setDetails(json?.items[0]);
    // setDetails(json);
    // console.log(json);
    // console.log(channelTitle);
   };
// const imgURL = details?.snippet?.thumbnails.high.url
const imgURL = details?.snippet?.thumbnails?.high.url
const subscribeCount = details?.statistics?.subscriberCount

  return (
    <div className='flex items-center'>
    <img className='w-14 rounded-full mr-2' src={imgURL} alt='channelimage' />
    <div>
    <p className='font-semibold text-lg'>{channelTitle}</p>
    <p className='text-xs'>{abbreviateNumber(subscribeCount)} subscribers</p>
    </div>

    </div>
  )
}

export default ChannelDetails