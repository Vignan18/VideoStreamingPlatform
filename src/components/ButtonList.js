import React from "react";
import Button from "./Button";

const list = ["All", "Live", "Gaming","Soccer","Cricket","Cooking","Songs","Live","Soccer","Cricket","Cooking","Songs","Live"];

const ButtonList = () => {
  return (
    <div className="flex">
      {
        list.map((ele,ind)=><Button key={ind} name={ele}/>)
      }
    </div>
  );
};

export default ButtonList;


