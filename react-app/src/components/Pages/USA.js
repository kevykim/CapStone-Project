import { NavLink } from "react-router-dom";
import TrailDetailSearchBar from "../SearchBar/TrailDetailSearchBar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { thunkGetTrail } from "../../store/trail";
import "./Pages.css";

function USA() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(thunkGetTrail())
  }, [dispatch])

  return (
    <div className="pages_main">
      <div className="page_inner">
        <div className="pages_detail_top_main">
          <div className="pages_detail_top_text">
            <div className="pages_detail_nonnavlink">
              United States of America
            </div>
          </div>
          <div>
            <TrailDetailSearchBar />
          </div>
        </div>
        <div className="pages_header">United States of America</div>
        <div className="pages_inner_div">
          <div className="pages_navlink_div">
            <NavLink className="pages_navlink" exact to="/California">
              <img
                className="pages_image"
                src="https://www.nationsonline.org/maps/USA/California_map.jpg"
                alt="california"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://www.nationsonline.org/maps/USA/California_map.jpg";
                }}
              ></img>
              California
            </NavLink>
          </div>
          <div className="pages_navlink_div">
            <NavLink className="pages_navlink" exact to="/New York">
              <img
                className="pages_image"
                src="https://www.nationsonline.org/maps/USA/New_York_map-L.jpg"
                alt="newyork"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://www.nationsonline.org/maps/USA/New_York_map-L.jpg";
                }}
              ></img>
              New York
            </NavLink>
          </div>
          <div className="pages_navlink_div">
            <NavLink className="pages_navlink" exact to="/Oregon">
              <img
                className="pages_image"
                src="https://www.nationsonline.org/maps/USA/Oregon_map-L.jpg"
                alt="oregon"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://www.nationsonline.org/maps/USA/Oregon_map-L.jpg";
                }}
              ></img>
              Oregon
            </NavLink>
          </div>
          <div className="pages_navlink_div">
            <NavLink className="pages_navlink" exact to="/Washington">
              <img
                className="pages_image"
                src="https://www.nationsonline.org/maps/USA/Washington_map-L.jpg"
                alt="washington"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://www.nationsonline.org/maps/USA/Washington_map-L.jpg";
                }}
              ></img>
              Washington
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default USA;
