import { useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { thunkGetTrail } from "../../store/trail";


import './SearchBar.css'



function SearchBar() {
    const dispatch = useDispatch()
    const trails = useSelector((state) => state.trail)
    const trailsArr = Object.values(trails)

    const [searchWord, setSearchWord] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [searchResult, setSearchResult] = useState([]);

    const results = (word) => {
       let arr = []
       trailsArr.forEach((trail, i) => {
        if (
          trail["name"].toLowerCase().includes(word.toLowerCase()) ||
          trail["resort"].toLowerCase().includes(word.toLowerCase()) ||
          trail["city"].toLowerCase().includes(word.toLowerCase())
        ) {
          arr.push(trail);
        }
        })
        return arr


    /*
    const array = trailssArr.map((trail, i) => {
        if (trail[i].city.toLowerCase().includes(word.toLowerCase())) {
            return;
        }
    })
    */
    };

    useEffect(() => {
        dispatch(thunkGetTrail())
    },[dispatch])

    useEffect(() => {
      if (searchWord?.length) {
        setShowDropdown(true);
        setSearchResult(results(searchWord));
      } else {
        setShowDropdown(false);
        setSearchResult([]);
      }
    }, [searchWord]);



    return (
      <>
        <div className="searchbar_main">
          <input
            type="text"
            className="searchbar_input"
            placeholder="Search by trail name, resort, or city"
            onChange={(e) => setSearchWord(e.target.value)}
            value={searchWord}
          />
          <div type="submit" className="searchbar_magnify">
            <i className="fa-solid fa-magnifying-glass fa-md "></i>
          </div>
          <div className="searchbar_arrowright">
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>

        {showDropdown && searchResult?.length > 0 && (
          <div className="searchbar_dropmenu">
            {searchResult.map((trail, i) => (
              <NavLink
                key={i}
                to={`/trails/${trail.id}`}
                className="searchbar_dropmenu_navlink"
                onClick={() => setSearchWord("")}
              >
                <div className="searchbar_dropmenu_inner">
                  {trail["resort"] === "Boreal Mountain Resort" && (
                    <div className="searchbar_dropmenu_text">
                      <div className="searchbar_dropdown_icons">
                        <i className="fa-solid fa-mountain fa-xl"></i>
                      </div>
                      <div className="searchbar_dropmenu_text_div">
                        <div>{`${trail["name"]}, ${trail["resort"]}`}</div>
                        <div className="searchbar_dropmenu_text_small">{`${trail['city']}, ${trail["state"]}, ${trail["country"]}`}</div>
                      </div>
                    </div>
                  )}
                  {trail["resort"] === "Heavenly Lake Tahoe" && (
                    <div className="searchbar_dropmenu_text">
                      <div className="searchbar_dropdown_icons">
                        <i className="fa-solid fa-person-snowboarding fa-xl"></i>
                      </div>
                      <div className="searchbar_dropmenu_text_div">
                        <div>{`${trail["name"]}, ${trail["resort"]}`}</div>
                        <div className="searchbar_dropmenu_text_small"> {`${trail['city']}, ${trail["state"]}, ${trail["country"]}`}</div>
                      </div>
                    </div>
                  )}
                  {trail["resort"] === "Mammoth Mountain" && (
                    <div className="searchbar_dropmenu_text">
                      <div className="searchbar_dropdown_icons">
                        <i className="fa-regular fa-snowflake fa-xl"></i>
                      </div>
                      <div className="searchbar_dropmenu_text_div">
                        <div>{`${trail["name"]}, ${trail["resort"]}`}</div>
                        <div className="searchbar_dropmenu_text_small">{`${trail['city']}, ${trail["state"]}, ${trail["country"]}`}</div>
                      </div>
                    </div>
                  )}
                  {trail["resort"] === "Bear Mountain" && (
                    <div className="searchbar_dropmenu_text">
                      <div className="searchbar_dropdown_icons">
                        <i className="fa-solid fa-person-skiing fa-xl"></i>
                      </div>
                      <div className="searchbar_dropmenu_text_div">
                        <div>{`${trail["name"]}, ${trail["resort"]}`}</div>
                        <div className="searchbar_dropmenu_text_small">{`${trail['city']}, ${trail["state"]}, ${trail["country"]}`}</div>
                      </div>
                    </div>
                  )}
                  {trail["resort"] === "Mountain High" && (
                    <div className="searchbar_dropmenu_text">
                      <div className="searchbar_dropdown_icons">
                        <i className="fa-brands fa-pagelines fa-xl"></i>
                      </div>
                      <div className="searchbar_dropmenu_text_div">
                        <div>{`${trail["name"]}, ${trail["resort"]}`}</div>
                        <div className="searchbar_dropmenu_text_small">{`${trail['city']}, ${trail["state"]}, ${trail["country"]}`}</div>
                      </div>
                    </div>
                  )}
                </div>
              </NavLink>
            ))}
          </div>
        )}

        {showDropdown && !searchResult?.length && (
          <div className="searchbar_nosearch_dropmenu">
            <div>No results</div>
            <div className="searchbar_nosearchfound">
              We couldn't find anything match &nbsp;
              <span className="searchbar_nosearchspan">"{searchWord}"</span>
            </div>
          </div>
        )}
      </>
    );
}

export default SearchBar;
