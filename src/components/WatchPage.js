import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";
import WatchPageDetails from "./WatchPageDetails";
import LiveChatContainer from "./LiveChatContainer";
import Recommendations from "./Recommendations";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(closeMenu());
  },[]);

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  return (
    // <div className='px-6 py-3 m-2 box '>
    //   <iframe className='rounded-lg' width="860" height="460" src={"https://www.youtube.com/embed/"+searchParams.get("v") }title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    // </div>
    // border-border-solid border-2 border-red-600
    <div className="  p-2 w-full pl-10 grid grid-cols-12  dark:bg-slate-800 dark:text-white">
      <div className=" flex flex-col col-span-12 md:col-span-8 overflow-x-hidden mr-2">
        {/* videotab */}
        <div>
          <iframe
            className="rounded-lg dark:bg-white"
            width="100%"
            height="460"
            src={
              "https://www.youtube.com/embed/" + videoId + "?autoplay=1&mute=0"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {/* Videodetails */}
        <WatchPageDetails videoId={videoId} />
      </div>
      <div>
        <LiveChatContainer />
        <Recommendations />
      </div>
    </div>
  )
}

export default WatchPage