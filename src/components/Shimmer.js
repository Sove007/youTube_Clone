import React from 'react'

const Shimmer = () => {
  return (
    <div className='flex flex-wrap container mx-auto'>
        {Array(12).fill('').map((e, index)=>
        <div  key={index}>
        <div className="m-2 w-[317px] mb-7 hover:shadow-xl animate-pulse">
  <div className="bg-gray-200 rounded-lg h-[200px]"></div> {/* Shimmer effect for the image */}
  <p className="font-semibold mt-2 bg-gray-200 h-6 w-3/4 rounded"></p> {/* Shimmer effect for the title */}
  <p className="bg-gray-200 h-4 w-1/4 mt-1 rounded"></p> {/* Shimmer effect for the channelTitle */}
  <ul className="flex text-sm font-light">
    <li className="bg-gray-200 h-4 w-1/4 rounded"></li> {/* Shimmer effect for the viewCount */}
    <li className="bg-gray-200 h-4 w-1/4 ms-2 pb-2 rounded"></li> {/* Shimmer effect for the daysAgo */}
  </ul>
</div>
 </div>
)}
    </div>
  )
}

export default Shimmer