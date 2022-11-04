import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { thunkGetTrail } from "../../store/trail";

import "./Pages.css";

function BlackDiamond() {
  const dispatch = useDispatch();

  const trail = useSelector((state) => state.trail);
  const trailArr = Object.values(trail);

  const blackDiamondFilter = trailArr.filter(
    (trail) => trail.difficulty === "Black Diamond"
  );

  useEffect(() => {
    dispatch(thunkGetTrail());
  }, [dispatch]);

  return (
    <div className="pages_main">
      <div className="page_inner">
        <div className="pages_header">All Black Diamond trails listed</div>
        <div className="pages_inner_div">
          <div className="pages_navlink_divs">
            {blackDiamondFilter.map((trail, i) => (
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
                  {trail.resort}&nbsp;&nbsp;•&nbsp;&nbsp;{trail.name}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlackDiamond;
