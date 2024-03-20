export const YouTube_API_KEY =  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+process.env.REACT_APP_GOOGLE_API_KEY ;

export const GOOGLE_API_KEY ="AIzaSyBBljbVlEvgg3d1fGCQqIeuvBPBDFEEFII";

// export const YouTube_API_KEY =  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API_KEY = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const channelImage_api =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY;
  
  export const videoDetailsApi =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY;

// export const YOUTUBE_COMMENTS_API = "https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyBBljbVlEvgg3d1fGCQqIeuvBPBDFEEFII&textFormat=plainText&part=snippet&videoId=5oExKMYIE9U&maxResults=50";