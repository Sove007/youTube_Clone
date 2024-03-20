import React, { useEffect, useState } from "react";
import CommentContainer from "./CommentContainer";
import { videoDetailsApi } from "./utils/constant";
import ChannelDetails from "./ChannelDetails";
import { TfiBell } from "react-icons/tfi";
import { abbreviateNumber } from "js-abbreviation-number";
import { BiLike, BiDislike } from "react-icons/bi";
import { PiShareFatThin } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { PublishedTimeOfVideo } from "./utils/publistDate";



const WatchPageDetails = ({ videoId }) => {
  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    getDetails();
  }, []);

  const { title, channelId, channelTitle, publishedAt,description, tags } =
    videoDetails?.snippet || {};
  const { viewCount, likeCount, commentCount } = videoDetails?.statistics || {};

  const getDetails = async () => {
    const data = await fetch(videoDetailsApi + "&id=" + videoId);
    const json = await data.json();
    // console.log(json?.items[0]);
    setVideoDetails(json?.items[0]);
    // console.log(title);
  };

  
  // Splicing the tags
  if (tags != null) {
    var tags_arr = tags.slice(0, 5);
  }

  return videoDetails == null ? (
    <div></div>
  ) : (
    <div className="flex flex-col w-full">
      <div className="my-2 font-semibold text-lg">{title}</div>

      {/* channelDetails and Likes */}
      <div className="flex items-center justify-between my-2 ">
        <div>
          <ChannelDetails channelTitle={channelTitle} channelId={channelId} />
        </div>

        <div className=" flex items-center text-center bg-gray-100 mx-4 px-4 p-2 rounded-full">
          <TfiBell />
          <p className="ml-1 font-semibold">Subscribe</p>
        </div>
        {/* likes and Dislikes */}
        {/* <div className="border-solid border-2 border-red-600 flex">
          <div className="border-solid border-2 border-red-600 rounded-full">
            <BiLike />
            <p>{abbreviateNumber(likeCount)}</p>
          </div>
        </div> */}
        <div className=" m-2 max-sm:hidden flex items-center bg-gray-100 p-2 px-6 rounded-full">
            <BiLike className="text-xl mr-1" />
            <p className="mx-1 text-sm font-semibold">{abbreviateNumber(likeCount)}</p>
            <p className="mx-1 text-gray-400">|</p>
            <BiDislike className="text-xl ml-1" />
          </div>
          {/* share  */}
          <div className="flex items-center bg-gray-100 justify-between rounded-full m-2 p-2 border-white" >
          <PiShareFatThin className="mr-1 text-xl" />
          <p className="ml-1 font-semibold ">Share</p>
          </div>
          <div className="flex items-center bg-gray-100 justify-between rounded-full m-2 p-2 border-white" >
          <LiaDownloadSolid  className="mr-1 text-xl" />
          <p className="ml-1 font-semibold ">Download</p>
          </div>
          <div className="flex items-center bg-gray-100 justify-between rounded-full m-2 p-2 border-white" >
          <p className="ml-1 font-semibold ">...</p>
          </div>


      </div>

{/* viewcount and description */}
<div className="bg-gray-100 p-2 rounded-xl px-4 dark:bg-slate-600 ">
        {/* viewCount and Date */}
        <div className="lg:flex">
          <p className="flex">
            <span className="font-semibold mr-2">
              {abbreviateNumber(viewCount)}
            </span>{" "}
            views
          </p>
          <p className="lg:ml-2 font-medium">
            {PublishedTimeOfVideo(publishedAt)}
          </p>

        </div>

        {/* Description */}
        {/* <p className="text-clip">{description.split("\n")[0]}</p> */}
        <p className="text-clip">{description.split('.')}</p>
        {/* Tags */}
        <div className="lg:flex">
          {/* {tags_arr.map((tag, index) => (
            <p key={index}>#{tag}</p>
          ))} */}
        </div>
    
</div>
      {/* comments */}
      <CommentContainer />
    </div>
  );
};

export default WatchPageDetails;
