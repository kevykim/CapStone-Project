import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { thunkGetTrail } from "../../../store/trail";
import PageSearchBar from "../../SearchBar/PageSearchBar";

import "../Pages.css";

function NewYork() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkGetTrail());
  }, [dispatch]);
  return (
    <div className="pages_main">
      <div className="page_inner">
        <div className="pages_detail_top_main">
          <div className="pages_detail_top_text">
            <div className="pages_detail_navlink">
              <NavLink
                style={{ textDecoration: "none", color: "rgb(132, 132, 132)" }}
                exact
                to="/United States of America"
              >
                United States of America
              </NavLink>
            </div>
            <div>&nbsp;›&nbsp;</div>
            <div className="pages_detail_text">New York</div>
          </div>
          <div>
            <PageSearchBar />
          </div>
        </div>
        <div className="pages_header">New York</div>
        <div className="pages_inner_div">
          <div className="pages_navlink_div">
            <NavLink className="pages_navlink" exact to="/Gore Mountain">
              <img
                className="pages_image"
                src="http://snowjournal.com/uploads/editor/3e/5m4wvd5c6ogi.jpg"
                alt="gore"
                onError={(e) => {
                  e.currentTarget.src =
                    "http://snowjournal.com/uploads/editor/3e/5m4wvd5c6ogi.jpg";
                }}
              ></img>
              Gore Mountain
            </NavLink>
          </div>
          <div className="pages_navlink_div">
            <NavLink className="pages_navlink" exact to="/Windham Mountain">
              <img
                className="pages_image"
                src="https://assets.simpleviewinc.com/simpleview/image/fetch/q_75/https://assets.simpleviewinc.com/simpleview/image/upload/crm/newyorkstate/Windham_0060-213a8669d775bfc_213a882d-0631-1323-3bb8913f518543a8.jpg"
                alt="winham"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://assets.simpleviewinc.com/simpleview/image/fetch/q_75/https://assets.simpleviewinc.com/simpleview/image/upload/crm/newyorkstate/Windham_0060-213a8669d775bfc_213a882d-0631-1323-3bb8913f518543a8.jpg";
                }}
              ></img>
              Windham Mountain
            </NavLink>
          </div>
          <div className="pages_navlink_div">
            <NavLink className="pages_navlink" exact to="/Hunter Mountain">
              <img
                className="pages_image"
                src="https://www.news10.com/wp-content/uploads/sites/64/2020/01/hunter-mountainnn.jpg"
                alt="hunter"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://www.news10.com/wp-content/uploads/sites/64/2020/01/hunter-mountainnn.jpg";
                }}
              ></img>
              Hunter Mountain
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewYork;
