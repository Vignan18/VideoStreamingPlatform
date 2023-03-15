
const API_KEY = "AIzaSyDL7CxvCE0w2M6duBmGM4-TabZczqpUb78"
export const YOUTUBE_VIDEOS_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+API_KEY;
export const YOUTUBE_SEARCH_API =
"http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const LIVE_CHAT_COUNT = 25;
export const GET_COMMENTS_API =
    "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=60&key=" +
    API_KEY +
    "&videoId=";

export const GET_LIST_OF_VIDEOS_API =
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
    API_KEY +
    "&q=";

/*
get search results 
maintain search state in redux store - searchSlice
get required results
*/