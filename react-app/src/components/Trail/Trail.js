import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { thunkGetCurrentTrail } from "../../store/trail";
import MyTrailShareModal from "../Modals/MyTrailShareModal";
import DeleteTrail from "./DeleteTrail";
import "./Trail.css";

function Trails() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.session.user);

  const currentTrail = useSelector((state) => state.trail);
  const currentTrailArr = Object.values(currentTrail);

  const currentTrailOwned = currentTrailArr.filter(
    (trail) => trail?.userId === user?.id
  );

  useEffect(() => {
    dispatch(thunkGetCurrentTrail());
  }, [dispatch]);

  if (!user) {
    history.push("/");
  }

  // DATE

  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  return (
    <div className="my_trail_main">
      {currentTrailOwned.length === 0 ? (
        <div>
          <div>Plan your perfect trail</div>
          <div>
            <NavLink exact to="/trails/new">
              Here
            </NavLink>
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
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.pexels.com/photos/6650184/pexels-photo-6650184.jpeg";
                  }}
                />
                <div className="my_trail_circle">
                  <div className="my_trail_circle_inner">
                    <div className="my_trail_circle_text">
                      <MyTrailShareModal trail={trail} />
                    </div>
                  </div>
                  <div className="my_trail_circle_inner">
                    <NavLink
                      className="my_trail_navlink"
                      exact
                      to={`/trails/${trail?.id}/update`}
                    >
                      <div className="my_trail_white_circle">
                        <i
                          style={{ color: "rgb(60, 103, 148)" }}
                          className="fa-solid fa-pen-to-square fa-xl"
                        ></i>
                      </div>
                      <div className="my_trail_circle_text">Edit</div>
                    </NavLink>
                  </div>
                  <div className="my_trail_circle_inner">
                    <div className="my_trail_circle_text">
                      <DeleteTrail trail={trail} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="my_trail_details">
                <div>{trail?.name}</div>
                <div>{`${new Date(trail.createdAt).toLocaleDateString(
                  undefined,
                  options
                )}`}</div>
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
