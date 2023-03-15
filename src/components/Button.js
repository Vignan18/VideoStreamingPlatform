import React from "react";
import { useDispatch } from "react-redux";
import { searchQueryfn } from "../utils/searchSlice";


const Button = ({ name }) => {

  const dispatch = useDispatch();


  const handleBtnClick = (e)=>{
     dispatch(searchQueryfn(e.target.innerText))
  }
  return (
    <div>
      <button className="px-5 py-2 m-2 bg-gray-200 rounded-lg"  onClick={handleBtnClick}>{name}</button>
    </div>
  );
};

export default Button;
