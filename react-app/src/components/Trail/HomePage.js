import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { thunkGetAllReview } from '../../store/review';

import { thunkGetTrail } from '../../store/trail';
import logo from "./WinterTrail_logo.png";
import './HomePage.css'

function HomePage() {
    const dispatch = useDispatch()

    const trail = useSelector(state => state.trail)
    const trailArr = Object.values(trail)

    const user = useSelector(state => state.session.user)


    useEffect(() => {
        dispatch(thunkGetTrail())
        dispatch(thunkGetAllReview())
    },[dispatch])


    return (
      <div className="homepage_main">
        <div className="homepage_main">
          <div className="homepage_image_div">
            <img
              style={{ height: "540px", width: "1265px" }}
              classname="homepage_image"
              src="https://images.pexels.com/photos/1404713/pexels-photo-1404713.jpeg"
              alt="home"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.pexels.com/photos/1404713/pexels-photo-1404713.jpeg";
              }}
            />
          </div>
          {!user ? (
            <div className="homepage_text">
              <div>Find your next trail</div>
            </div>
          ) : (
            <div className="homepage_text">
              <div>Welcome {user?.firstName}</div>
            </div>
          )}
        </div>
        <div className="homepage_empty_div"></div>
        <div className="local_favorites_text">Local favorites</div>
        <div className="homepage_arr_div">
          {trailArr.map((trail, i) => (
            <div className="homepage_arr_div_inner" key={i}>
              <div>
                <NavLink exact to={`/trails/${trail.id}`}>
                  <img
                    className="homepage_trail_image"
                    src={trail.previewImg}
                    alt="trailimg"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.pexels.com/photos/6650184/pexels-photo-6650184.jpeg";
                    }}
                  />
                </NavLink>
              </div>
              <div>
                <div className="homepage_trail_firstline">
                  {/* <div className="homepage_trail_difficulty">
                    {trail.difficulty}&nbsp;·&nbsp;
                  </div> */}
                  {trail.difficulty === "Beginner" ? (
                    <div className="homepage_trail_difficulty_beginner">
                      <i className="fa-solid fa-circle fa-xs"></i>
                      &nbsp;
                      {trail.difficulty}
                      &nbsp;·&nbsp;
                    </div>
                  ) : trail.difficulty === "Intermediate" ? (
                    <div className="homepage_trail_difficulty_intermediate">
                      <i className="fa-solid fa-square fa-xs"></i>
                      &nbsp;
                      {trail.difficulty}
                      &nbsp;·&nbsp;
                    </div>
                  ) : trail.difficulty === "Black Diamond" ? (
                    <div className="homepage_trail_difficulty_blackdiamond">
                      <i className="fa-solid fa-diamond fa-xs"></i>
                      &nbsp;
                      {trail.difficulty}
                      &nbsp;·&nbsp;
                    </div>
                  ) : (
                    <div className="homepage_trail_difficulty_doubleblackdiamond">
                      <i className="fa-solid fa-diamond fa-xs"></i>
                      <i className="fa-solid fa-diamond fa-xs"></i>
                      &nbsp;
                      {trail.difficulty}
                      &nbsp;·&nbsp;
                    </div>
                  )}
                  <div className="homepage_trail_review_div">
                    <div className="homepage_trail_star_div">
                      <i className="fa-solid fa-star fa-sm"></i>
                    </div>
                    <div className="homepage_trail_avgreview">
                      {trail.averagestar}
                      &nbsp;
                    </div>
                    <div className="homepage_trail_totalreview">
                      {`(${trail.reviews.length})`}
                    </div>
                  </div>
                </div>
                <div className="homepage_trail_name">{trail.name}</div>
                <div className="homepage_trail_othertext">{trail.resort}</div>
                <div className="homepage_trail_othertext">{`Length: ${trail.length} mi`}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="footer_main">
          <div className="footer_main">
            <div className="footer_logo_div">
              <img
                src={logo}
                alt="logo"
                onError={(e) => {
                  e.currentTarget.src = { logo };
                }}
              />
              <div className="footer_logo_text">&nbsp;WinterTrails</div>
            </div>
            <div className="footer_first_row">
              <div>
                <div className="footer_first_row_header">Explore</div>
                {/* <div>Countries</div>
                <div>States</div> */}
                <div className="footer_first_innertext">
                  <NavLink className="footer_first_navlink" exact to="/resorts">
                    Resorts
                  </NavLink>
                </div>
                <div className="footer_first_innertext">
                  <NavLink
                    className="footer_first_navlink"
                    exact
                    to="/alltrails"
                  >
                    Trails
                  </NavLink>
                </div>
              </div>
              <div>
                <div className="footer_first_row_header">Trails</div>
                <div className="footer_first_innertext">My trails</div>
                <div className="footer_first_innertext">Create trail</div>
              </div>
              <div>
                <div>
                  <div className="footer_first_row_header">Connections</div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>2022 WinterTrails</div>
                <div>Inspired by AllTrails</div>
              </div>
              <div>{`English (US)`}</div>
            </div>
          </div>
        </div>
      </div>
    );
}



export default HomePage