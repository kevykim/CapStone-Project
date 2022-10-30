import { NavLink, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import {  thunkGetTrail } from "../../store/trail"
// import { thunkGetSingleTrail } from "../../store/trail"
import CreateReviewModal from "../Review/CreateReviewModal"

import './TrailDetail.css'
import { thunkGetTrailReview } from "../../store/review"

function TrailDetail() {
    const {id} = useParams()
    const dispatch = useDispatch()

    const user = useSelector(state => state.session.user)
    const trail = useSelector(state => state.trail[id])
    const review = useSelector(state => state.review)
    const reviewArr = Object.values(review)


    //TRAILS NEAR ME SIDEBAR
    const everyTrail = useSelector(state => state.trail)
    const everyTrailArr = Object.values(everyTrail)

    const trailsNear = everyTrailArr.filter(trails => trails.resort === trail?.resort)

    // const trailfilter = everyTrailArr.filter(trails => trails.id === Number(id))
    // console.log(trailfilter[0])


    useEffect(() => {
        // dispatch(thunkGetSingleTrail(id))
        dispatch(thunkGetTrailReview(id))
        dispatch(thunkGetTrail())
    }, [dispatch, id])

    return (
      <>
        <div className="trail_detail_main">
          <div className="trail_detail_top_text">
            <div>
              <NavLink
                style={{ textDecoration: "none", color: "rgb(132, 132, 132)" }}
                classname="trail_detail_navlink"
                exact
                to={`/${trail?.country}`}
              >
                {trail?.country}
              </NavLink>
            </div>
            <div>&nbsp;›&nbsp;</div>
            <div classname="trail_detail_navlink">
              <NavLink
                style={{ textDecoration: "none", color: "rgb(132, 132, 132)" }}
                exact
                to={`/${trail?.state}`}
                classname="trail_detail_navlink"
              >
                {trail?.state}
              </NavLink>
            </div>
            <div>&nbsp;›&nbsp;</div>
            <div>
              <NavLink
                style={{ textDecoration: "none", color: "rgb(132, 132, 132)" }}
                classname="trail_detail_navlink"
                exact
                to={`/${trail?.resort}`}
              >
                {trail?.resort}
              </NavLink>
            </div>
            <div>&nbsp;›&nbsp;</div>
            <div>{trail?.name}</div>
          </div>
          <div className="trail_detail_image_div">
            <img
              className="trail_detail_previewImg"
              src={trail?.previewImg}
              alt="traildetail"
            />
            <div>
              <div className="trail_detail_bluebar"></div>
            </div>
            <div className="trail_detail_circle">
              <div className="trail_detail_circle_inner">
                <div className="trail_detail_white_circle"></div>
                <div className="trail_detail_circle_text">Photos</div>
              </div>
              <div className="trail_detail_circle_inner">
                <div className="trail_detail_white_circle"></div>
                <div className="trail_detail_circle_text">Share</div>
              </div>
              <div className="trail_detail_circle_inner">
                <div className="trail_detail_white_circle"></div>
                <div className="trail_detail_circle_text">More</div>
              </div>
            </div>
          </div>
          <div className="trail_detail_image_text">
            <div className="trail_detail_image_firstline">{trail?.name}</div>
            <div className="trail_detail_image_secondline">
              <div>{trail?.difficulty}</div>
              <div>review stars and total</div>
            </div>
            <div className="trail_detail_image_thirdline">{trail?.resort}</div>
          </div>
        </div>
        <div className="trail_detail_bottom_box">
          <div className="trail_detail_bottom_second">
            <div className="trail_detail_bottom_inner">
              <div className="trail_detail_bottom_description">
                {trail?.description}
              </div>
            </div>
            <div className="trail_detail_bottom_inner">
              <div className="trail_detail_bottom_info_divs">
                <div className="trail_detail_bottom_firstline">Length</div>
                <div className="trail_detail_bottom_secondline">
                  {trail?.length} mi
                </div>
              </div>
              <div className="trail_detail_bottom_info_divs">
                <div className="trail_detail_bottom_firstline">
                  Elevation gain
                </div>
                <div className="trail_detail_bottom_secondline">
                  {trail?.elevation} ft
                </div>
              </div>
              <div className="trail_detail_bottom_info_divs">
                <div className="trail_detail_bottom_firstline">Route Type</div>
                <div className="trail_detail_bottom_secondline">
                  {trail?.routeType}
                </div>
              </div>
            </div>
            <div>
              <div className="trail_detail_bottom_inner">
                <div className="trail_detail_bottom_allreview">
                  <div>review avg</div>
                  <div>review stars</div>
                  <div>{reviewArr.length} Reviews</div>
                </div>
                <div className="trail_detail_bottom_writereview">
                  <CreateReviewModal />
                </div>
              </div>
              <div>
                {reviewArr.map((review, i) => (
                  <div className="trail_detail_bottom_inner" key={i}>
                    <div className="trail_detail_bottom_profileinfo">
                      <div>profile pic</div>
                      <div>
                        <div>first and last name</div>
                        <div>review date</div>
                      </div>
                    </div>
                    <div>
                      <div>{review.stars}</div>
                      <div>{review.review}</div>
                      <div>review img</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="trail_detail_sidebar">
            <div className="trail_detail_near_div">
              <div className="trail_detail_sidebar_inner">
              <div className="trail_detail_near_text">Nearby trails in {trail?.resort}</div>
                {trailsNear.map((trail, i) => (
                  <div classname="trail_detail_sidebar_inner_div" key={i}>
                    <div className="trail_detail_sidebar_image_div">
                      <NavLink exact to={`/trails/${trail.id}`}>
                        <img
                          className="trail_detail_sidebar_image"
                          src={trail.previewImg}
                          alt="nearme"
                        />
                      </NavLink>
                      <div className="trail_detail_sidebar_image_info">
                      <div className="trail_detail_sidebar_firstline">
                        <div>{trail.difficulty}&nbsp;</div>
                        <div>staravg&totalreviews</div>
                      </div>
                      <div className="trail_detail_sidebar_name">{trail.name}</div>
                      <div className="trail_detail_sidebar_othertext">
                        {trail.resort}
                      </div>
                      <div className="trail_detail_sidebar_othertext">{`Length: ${trail.length} mi`}</div>
                      </div>
                    </div>


                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}



export default TrailDetail