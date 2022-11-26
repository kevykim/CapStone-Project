import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { thunkGetTrail } from "../../store/trail";
import PageSearchBar from "../SearchBar/PageSearchBar";


import "./Pages.css";

function Heavenly() {
  const dispatch = useDispatch();

  const trail = useSelector((state) => state.trail);
  const trailArr = Object.values(trail);

  const heavenlyFilter = trailArr.filter(
    (trail) => trail.resort === "Heavenly Lake Tahoe"
  );

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
          <div className="pages_detail_navlink">
            <NavLink
              style={{ textDecoration: "none", color: "rgb(132, 132, 132)" }}
              exact
              to="/California"
            >
              California
            </NavLink>
          </div>
          <div>&nbsp;›&nbsp;</div>
          <div className="pages_detail_text">Heavenly Lake Tahoe</div>
        </div>
        <div>
          < PageSearchBar />
        </div>
        </div>
        <div className="pages_header">Heavenly Lake Tahoe</div>
        <div className="pages_inner_div">
          <div className="pages_navlink_divs">
            {/* <div className="pages_resort_header">Boreal Mountain Resort</div> */}
            {heavenlyFilter.map((trail, i) => (
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

export default Heavenly;
