import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API, GET_LIST_OF_VIDEOS_API } from "../utils/constants";
import VideoCard from './Videocard';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const searchQry = useSelector((store) => store.search.searchQry);
   

  useEffect(() => {
    getVideos();
  }, [searchQry])

  const getVideos = async () => {
    let data, json,filteredData;
    //search results
    if (searchQry.length !== 0) {
      data = await fetch(GET_LIST_OF_VIDEOS_API + searchQry)
      json = await data.json();
     
      filteredData = json.items.filter((data)=> data.id.videoId!==undefined);
      setVideos(filteredData)
    }
    else {
      data = await fetch(YOUTUBE_VIDEOS_API);
      json = await data.json();
      setVideos(json.items);
    }
   
  }


  return (
    <div className="flex flex-wrap">

      {videos.map((video) => (
        <Link key={typeof video.id === 'object' ? video.id.videoId : video.id} to={"/watch?v=" + (typeof video.id === 'object' ? video.id.videoId : video.id)}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  )
}

export default VideoContainer