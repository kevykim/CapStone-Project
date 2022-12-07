import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { thunkGetTrail } from "../../../store/trail";
import PageSearchBar from "../../SearchBar/PageSearchBar";

import "../Pages.css";

function Washington() {
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
            <div className="pages_detail_text">Washington</div>
          </div>
          <div>
            <PageSearchBar />
          </div>
        </div>
        <div className="pages_header">Washington</div>
        <div className="pages_inner_div">
          <div className="pages_navlink_div">
            <NavLink className="pages_navlink" exact to="/Crystal Mountain">
              <img
                className="pages_image"
                src="https://www.powderhounds.com/site/DefaultSite/filesystem/images/USA/CrystalMountain/Overview/13.jpg"
                alt="crystal"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://www.powderhounds.com/site/DefaultSite/filesystem/images/USA/CrystalMountain/Overview/13.jpg";
                }}
              ></img>
              Crystal Mountain
            </NavLink>
          </div>
          <div className="pages_navlink_div">
            <NavLink className="pages_navlink" exact to="/Stevens Pass">
              <img
                className="pages_image"
                src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Stevens_Pass_Signs_2700px.jpg"
                alt="steven"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://upload.wikimedia.org/wikipedia/commons/5/5f/Stevens_Pass_Signs_2700px.jpg";
                }}
              ></img>
              Stevens Pass
            </NavLink>
          </div>
          <div className="pages_navlink_div">
            <NavLink className="pages_navlink" exact to="/Mount Baker">
              <img
                className="pages_image"
                src="https://live.staticflickr.com/1492/24178680742_e28066cdaa_b.jpg"
                alt="baker"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://live.staticflickr.com/1492/24178680742_e28066cdaa_b.jpg";
                }}
              ></img>
              Mount Baker
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Washington;
