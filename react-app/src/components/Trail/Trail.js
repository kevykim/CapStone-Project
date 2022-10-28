import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { thunkGetCurrentTrail, thunkGetTrail } from "../../store/trail";
import "./Trail.css";

function Trails() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

  const currentTrail = useSelector((state) => state.trail);
  const currentTrailArr = Object.values(currentTrail);

  const currentTrailOwned = currentTrailArr.filter(
    (trail) => trail?.userId === user?.id
  );

  useEffect(() => {
    dispatch(thunkGetTrail());
    dispatch(thunkGetCurrentTrail());
  }, [dispatch]);

  return (
    <div className="my_trail_main">
      {currentTrailOwned.length === 0 ? (
        <div>
          <div>Plan your perfect trail</div>
          <div>
            <NavLink exact to="/"></NavLink>
          </div>
        </div>
      ) : (
          <div>
            <div className="my_trail_header">My Trails</div>
          {currentTrailArr.map((trail, i) => (
              <div key={i}>
              <div className="my_trail_image_div">
                <img
                  className="my_trail_image"
                  src={trail?.previewImg}
                  alt="mytrail"
                />
                <div className="my_trail_circle">
                  <div className="my_trail_circle_inner">
                    <div className="my_trail_white_circle"></div>
                    <div className="my_trail_circle_text">Share</div>
                  </div>
                  <div className="my_trail_circle_inner">
                    <NavLink exact to={`/trails/${trail?.id}/update`}>
                    <div className="my_trail_white_circle"></div>
                    <div className="my_trail_circle_text">Edit</div>
                    </NavLink>
                  </div>
                  <div className="my_trail_circle_inner">
                    <div className="my_trail_white_circle"></div>
                    <div className="my_trail_circle_text">Delete</div>
                  </div>
                </div>
              </div>
                <div className="my_trail_details">
                  <div>{trail?.name}</div>
                  <div>DATE?</div>
                </div>
                <div className="my_trail_border"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Trails;
