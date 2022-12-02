import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { thunkGetCurrentTrail } from "../../store/trail";
import MyTrailShareModal from "../Modals/MyTrailShareModal";
import DeleteTrailModal from "./DeleteTrailModal";
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="my_trail_inner_div">
          <div style={{ width: "1100px" }}>
            <div style={{ width: "100%" }}>
              <div className="my_trail_top_text">
                <div>Member</div>
                <div>&nbsp;›&nbsp;</div>
                <div>
                  {user?.firstName}
                  &nbsp;
                  {user?.lastName}
                </div>
                <div>&nbsp;›&nbsp;</div>
                <div>Trails</div>
              </div>
              <div className="my_trail_top_border"></div>
            </div>
            <div className="my_trail_header_div">
              <div className="my_trail_header">Trails</div>
            </div>
          </div>
          {currentTrailOwned.length === 0 ? (
            <div className="my_trail_notrails_div">
              <div className="my_trail_notrails_text">
                Plan your next trail&nbsp;
                <span>
                  <NavLink
                    className="my_trail_notrails_navlink"
                    exact
                    to="/trails/new"
                  >
                    here...
                  </NavLink>
                </span>
              </div>
              <div>
                <img
                  className="my_trail_notrails_image"
                  src="https://images.pexels.com/photos/6466115/pexels-photo-6466115.jpeg"
                  alt="notrail"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.pexels.com/photos/6466115/pexels-photo-6466115.jpeg";
                  }}
                />
              </div>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                flexWrap: "wrap",
                alignItems: "center",
                width:'100%'
              }}
            >
              {currentTrailOwned.map((trail, i) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    width: "500px",
                  }}
                >
                  <div className="my_trail_image_boxes" key={i}>
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
                            <DeleteTrailModal trail={trail} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="my_trail_details_detailandborder">
                      <div className="my_trail_details">
                        <div>
                          <NavLink
                            className="my_trail_details_navlink_text"
                            exact
                            to={`/trails/${trail?.id}`}
                          >
                            {trail?.name}
                          </NavLink>
                        </div>
                        <div>{`${new Date(trail.createdAt).toLocaleDateString(
                          undefined,
                          options
                        )}`}</div>
                      </div>
                      <div className="my_trail_border"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Trails;








// FOR MAPS SIDE
// return (
//     <div className="my_trail_main">
//       {currentTrailOwned.length === 0 ? (
//         <div className="my_trail_notrails_div">
//           <div>Plan your perfect trail&nbsp;</div>
//           <div>
//             <NavLink className='my_trail_notrails_navlink' exact to="/trails/new">
//               here...
//             </NavLink>
//           </div>
//         </div>
//       ) : (
//         <div>
//           <div className="my_trail_header">My Trails</div>
//           {currentTrailArr.map((trail, i) => (
//             <div key={i}>
//               <div className="my_trail_image_div">
//                 <img
//                   className="my_trail_image"
//                   src={trail?.previewImg}
//                   alt="mytrail"
//                   onError={(e) => {
//                     e.currentTarget.src =
//                       "https://images.pexels.com/photos/6650184/pexels-photo-6650184.jpeg";
//                   }}
//                 />
//                 <div className="my_trail_circle">
//                   <div className="my_trail_circle_inner">
//                     <div className="my_trail_circle_text">
//                       <MyTrailShareModal trail={trail} />
//                     </div>
//                   </div>
//                   <div className="my_trail_circle_inner">
//                     <NavLink
//                       className="my_trail_navlink"
//                       exact
//                       to={`/trails/${trail?.id}/update`}
//                     >
//                       <div className="my_trail_white_circle">
//                         <i
//                           style={{ color: "rgb(60, 103, 148)" }}
//                           className="fa-solid fa-pen-to-square fa-xl"
//                         ></i>
//                       </div>
//                       <div className="my_trail_circle_text">Edit</div>
//                     </NavLink>
//                   </div>
//                   <div className="my_trail_circle_inner">
//                     <div className="my_trail_circle_text">
//                       <DeleteTrailModal trail={trail} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="my_trail_details">
//                 <div>{trail?.name}</div>
//                 <div>{`${new Date(trail.createdAt).toLocaleDateString(
//                   undefined,
//                   options
//                 )}`}</div>
//               </div>
//               <div className="my_trail_border"></div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Trails;
