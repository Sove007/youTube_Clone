import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, publishedAt, thumbnails } = snippet;

  const uploadedDate = new Date(publishedAt);
  const currentDay = new Date();

  const timeDifference = currentDay - uploadedDate;

    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return (
    <div className="m-2  w-[317px] mb-7 hover:scale-y-105 transition-transform duration-300 ease-in-out">
      <img className="rounded-lg hover:rounded-sm" src={thumbnails.medium.url} alt="banner" />
      <h1 className="font-semibold mt-2">{title}...</h1>
      <h4>{channelTitle} ✅</h4>
      <ul className="flex text-sm font-light">
        <li>{statistics.viewCount} views</li>
        <li className="ms-2 pb-2">{daysAgo} days ago</li>
      </ul>
    </div>
  );
};

export default VideoCard;
