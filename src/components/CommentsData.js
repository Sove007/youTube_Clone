import React, { useState,useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { GOOGLE_API_KEY } from './utils/constant';
import CommentsCard from './ComentsCard';

const CommentsData = () => {
    const [comments, SetComments] = useState([]);
    const [searchParams] = useSearchParams();
    // console.log(searchParams.get("v"));

    useEffect(() => {
      getComments()
    }, [])
    const getComments = async()=>{
        const data =await  fetch("https://www.googleapis.com/youtube/v3/commentThreads?key="+GOOGLE_API_KEY+"&textFormat=plainText&part=snippet&videoId="+searchParams.get("v")+"&maxResults=50");
        const json =await data.json();
        // console.log(json.items);
        // console.log(json.items.snippet);
        SetComments(json.items)
    }
    
  return (
    <div>
    {comments.map((comment)=>{

        <CommentsCard key={comment.id} info={comment} />
    })}
    </div>
  )
}

export default CommentsData;