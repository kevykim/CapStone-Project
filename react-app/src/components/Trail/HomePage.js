import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { thunkGetTrail } from '../../store/trail';
import './HomePage.css'

function HomePage() {
    const dispatch = useDispatch()

    const trail = useSelector(state => state.trail)
    const trailArr = Object.values(trail)

    const user = useSelector(state => state.session.user)


    useEffect(() => {
        dispatch(thunkGetTrail())
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
                  />
                </NavLink>
              </div>
              <div>
                <div className="homepage_trail_firstline">
                  <div className="homepage_trail_difficulty">
                    {trail.difficulty}&nbsp;·&nbsp;
                  </div>
                  <div className="homepage_trail_review_div">
                    <div className="homepage_trail_star_div">
                      <i className="fa-solid fa-star fa-sm"></i>
                    </div>
                    <div className="homepage_trail_avgreview">reviewavg</div>
                    <div className="homepage_trail_totalreview">
                      (totalreview)
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
      </div>
    );
}



export default HomePage