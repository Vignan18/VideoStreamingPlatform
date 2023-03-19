import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {GET_COMMENTS_API} from "../utils/constants";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      {
        comment.replies && 
        <div className="pl-5  ml-5">
        <CommentsList comments={comment.replies.comments} />
      </div> 
      }
    </div>
  ));
};

const CommentsContainer = ({videoId}) => {
  const [comments,setComments] = useState([]);
  useEffect(()=>{
    getComments();
  },[]);

  const getComments = async () => {
    const data = await fetch(GET_COMMENTS_API + videoId);
    const json = await data.json();
    setComments(json.items);
  };


  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={comments} />
    </div>
  );
};

export default CommentsContainer;
