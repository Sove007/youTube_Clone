import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, closeMenu } from "./utils/appSlice";
import { useEffect } from "react";
import { YOUTUBE_SEARCH_API_KEY } from "./utils/constant";
import { cacheResults } from "./utils/searchSlice";
// import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  // const navigate = useNavigate();
  const [searchText, setSearchtext] = useState("");
  const [suggessions, setSuggessions] = useState([]);
  const [showSuggesions, setShowSuggesions] = useState(false);

  const dispatch = useDispatch();
  const searchcache = useSelector((store) => store.search);

  useEffect(() => {
    // getSearchItems()
    const timer = setTimeout(() => {
      if (searchcache[searchText]) {
        setShowSuggesions(searchcache[searchText]);
      } else {
        getSearchItems();
      }
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSearchItems = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API_KEY + searchText);
    // console.log(`api call ${searchText}`);
    const json = await data.json();
    // console.log(json[1]);
    setSuggessions(json[1]);
    dispatch(
      cacheResults({
        [searchText]: json[1],
      })
    );
  };

  // toggle menu
  const handleClick = () => {
    dispatch(toggleMenu());
  };


  useEffect(() => {
    // Hiding SideBar Intially for Sm Screens
    if (window.innerWidth < 768) dispatch(closeMenu());
  }, []);

  // Handling event when clicked enter in search bar
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Navigate");
  //   navigate("/search?q=" + searchText, { relative: "path" });
  //   setShowSuggesions(false);
  // };

  return (
    <div className="z-10 sticky top-0 grid grid-flow-col shadow-lg p-2 m-2 bg-white ">
      <div className="flex col-span-1 ">
        <img
          onClick={handleClick}
          className="h-[56px] cursor-pointer"
          alt="hamburgerimage"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8CAgIAAADb29vDw8OxsbHt7e3y8vK4uLiampo7OztmZmaAgIC8vLzT09NhYWEcHBxxcXHi4uITExOioqJXV1eHh4dMTEx7e3uQkJAnJyc1NTX5+fnW1tbJyclAQEBzZbpGAAABTUlEQVR4nO3cC1LCQAwG4LK8lYcioCLi/W9pGa9gkyH9vgt0/tmhGzbNdh0AAAAAAAAAAAAAAAAAAABEW0yHtkzNt9u/tKFdXg95AdeDx/uzygo4b20SobVdTsBlUMA+4ltOwmNUwH4RZykJT2EJJ+2ckvApMOFzSsL3wIQfKQk/AxPOUxJO496lLamw2YTth8ecgF23bwEZ+2dssgL2W+IloGb7Siva7q671XxY2+/MfAAAAAAPY3GbDeuW2wOe/QSctZ2Suod35xZzXpp2ILwOO/Pe5gQ8BPaArykJ14E94JxFjOwf5nQu9ID/M2HOGtb/HdZ/l9bfD0dQ04ygLu3q/7cAAAAAeBDlv9UvP29Rfmam/NxT/dm1+vOH9WdI6/eA689y15/Hr3+nQv17MUZwt8kI7qfp6t8xBAAAAAAAAAAAAAAAAAAAwDj9AgjsI6cJ8n2yAAAAAElFTkSuQmCC"
        />
        <a href="/">
          <img
            className="h-[56px] mx-2 "
            alt="logo"
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          />
        </a>
      </div>

{/* Search */}
      <div className="col-span-10 px-10 ml-16">
        <div>
          <input
            className="w-3/5 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchText}
            onChange={(e) => setSearchtext(e.target.value)}
            onFocus={() => setShowSuggesions(true)}
            onBlur={() => setShowSuggesions(false)}
            placeholder="Search"
            // onKeyDown={(e) => {
            //   if (e.key === "Enter") {
            //     handleSubmit(e);
            //   }
            // }}
          />
          <button
            className="border border-gray-400 px-5 py-2 rounded-r-full  hover:bg-gray-200 bg-gray-100"
            // onClick={() => {
            //   navigate("/search?q=" + searchText, { relative: "path" });
            // }}
          >
            🔍
          </button>

          {/* Suggession */}
          {showSuggesions && searchText !== "" && (
            <div className="fixed bg-white w-[32rem] shadow-lg rounded-lg mt-1 border border-gray-300">
              <ul>
                {suggessions.map((s, index) => (
                  <li
                    key={index}
                    className="font-semibold hover:bg-gray-200 my-1 px-3 py-2 shadow-sm w-full"
                  >
                    {/* <Link to={"/search?q=" + s} onClick={()=> setSearchtext(s)}> */}
                      <div className="flex lg:w-[23rem] lg:mr-[8.3rem] px-5 items-center">
                        🔍 <span className="mb-1">{s}</span>
                      </div>
                      {/* </Link> */}
                    
                    
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/*           
        <div className="bg-red-300 items-start">
     voice
      </div> */}
        </div>
      </div>

      <div className="col-span-1">
        <img
          className="h-[26px]"
          src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
          alt="userlogo"
        />
      </div>
    </div>
  );
};

export default Header;
