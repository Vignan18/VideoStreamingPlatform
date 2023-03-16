import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchQueryfn } from "../utils/searchSlice";
import { useDispatch } from "react-redux";



const Sidebar = () => {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen);
  const dispatch = useDispatch();


  if(!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
      <li onClick={()=> dispatch(searchQueryfn(""))}>
          <Link to="/">Home</Link>
        </li>
        <li> Shorts</li>
        <li> Videos</li>
        <li> Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
