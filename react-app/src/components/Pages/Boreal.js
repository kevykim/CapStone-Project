import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { thunkGetTrail } from "../../store/trail";

import "./Pages.css";

function Boreal() {
  const dispatch = useDispatch();

  const trail = useSelector((state) => state.trail);
  const trailArr = Object.values(trail);

  const borealFilter = trailArr.filter(
    (trail) => trail.resort === "Boreal Mountain Resort"
  );


  useEffect(() => {
    dispatch(thunkGetTrail());
  }, [dispatch]);
  return (
    <div className="pages_main">
      <div className="page_inner">
        <div className="pages_detail_top_text">
          <div className="pages_detail_navlink">
            <NavLink
              style={{ textDecoration: "none", color: "rgb(132, 132, 132)" }}
              exact
              to='/United States of America'
            >
              United States of America
            </NavLink>
          </div>
          <div>&nbsp;›&nbsp;</div>
          <div className="pages_detail_navlink">
            <NavLink
              style={{ textDecoration: "none", color: "rgb(132, 132, 132)" }}
              exact
              to='/California'
            >
              California
            </NavLink>
          </div>
          <div>&nbsp;›&nbsp;</div>
          <div className="pages_detail_text">
           Boreal Mountain Resort
          </div>
        </div>
        <div className="pages_header">Boreal Mountain Resort</div>
        <div className="pages_inner_div">
          <div className="pages_navlink_divs">
            {/* <div className="pages_resort_header">Boreal Mountain Resort</div> */}
            {borealFilter.map((trail, i) => (
              <div className="pages_navlink_div" key={i}>
                <NavLink
                  className="pages_navlink"
                  exact
                  to={`/trails/${trail?.id}`}
                >
                  <img
                    className="pages_image"
                    src={trail.previewImg}
                    alt="trail"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.pexels.com/photos/6650184/pexels-photo-6650184.jpeg";
                    }}
                  />
                  {trail.name}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boreal;
