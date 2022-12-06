import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { thunkGetTrail } from "../../../store/trail";
import PageSearchBar from "../../SearchBar/PageSearchBar";

import "../Pages.css";



function Oregon() {
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
            <div className="pages_detail_text">Oregon</div>
          </div>
          <div>
            <PageSearchBar />
          </div>
        </div>
        <div className="pages_header">Oregon</div>
        <div className="pages_inner_div">
          <div className="pages_navlink_div">
            <NavLink className="pages_navlink" exact to="/Mount Hood Meadows">
              <img
                className="pages_image"
                src="http://theatlasheart.com/wp-content/uploads/2016/01/04-IMG_5491.jpg"
                alt="mthood"
                onError={(e) => {
                  e.currentTarget.src =
                    "http://theatlasheart.com/wp-content/uploads/2016/01/04-IMG_5491.jpg";
                }}
              ></img>
              Mount Hood Meadows
            </NavLink>
          </div>
          <div className="pages_navlink_div">
            <NavLink
              className="pages_navlink"
              exact
              to="/Timberline Summit Pass"
            >
              <img
                className="pages_image"
                src="https://pbs.twimg.com/media/FJkOKGtVIAE7AqC?format=jpg&name=large"
                alt="timberline"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://pbs.twimg.com/media/FJkOKGtVIAE7AqC?format=jpg&name=large";
                }}
              ></img>
              Timberline Summit Pass
            </NavLink>
          </div>
          <div className="pages_navlink_div">
            <NavLink className="pages_navlink" exact to="/Mount Bachelor">
              <img
                className="pages_image"
                src="https://www.powderhounds.com/site/DefaultSite/filesystem/images/USA/MtBachelor/FacilitiesServices/04.jpg"
                alt="timberline"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://www.powderhounds.com/site/DefaultSite/filesystem/images/USA/MtBachelor/FacilitiesServices/04.jpg";
                }}
              ></img>
              Mount Bachelor
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Oregon;