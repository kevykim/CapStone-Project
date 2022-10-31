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

    // AVERAGE STAR
    const wholeAverage = Math.round(trail?.averagestar)
    // console.log(wholeAverage)


    useEffect(() => {
        // dispatch(thunkGetSingleTrail(id))
        dispatch(thunkGetTrail())
        dispatch(thunkGetTrailReview(id))
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
              {trail.difficulty === "Beginner" ? (
                <div className="trail_detail_difficulty_beginner_box">
                  <i className="fa-solid fa-circle fa-xs"></i>
                  &nbsp;
                  {trail.difficulty}
                </div>
              ) : trail.difficulty === "Intermediate" ? (
                <div className="trail_detail_difficulty_intermediate_box">
                  <i className="fa-solid fa-square fa-xs"></i>
                  &nbsp;
                  {trail.difficulty}
                </div>
              ) : trail.difficulty === "Black Diamond" ? (
                <div className="trail_detail_difficulty_blackdiamond_box">
                  <i className="fa-solid fa-diamond fa-xs"></i>
                  &nbsp;
                  {trail.difficulty}
                </div>
              ) : (
                <div className="trail_detail_difficulty_doubleblackdiamond_box">
                  <i className="fa-solid fa-diamond fa-xs"></i>
                  <i className="fa-solid fa-diamond fa-xs"></i>
                  &nbsp;
                  {trail.difficulty}
                </div>
              )}
              <div className="trail_detail_image_reviewinfo">
                <div>
                  {wholeAverage === 1 && (
                    <div>
                      <i
                        style={{ color: "gold" }}
                        className="fa-solid fa-star"
                      ></i>
                      <i
                        style={{ color: "lightgray" }}
                        className="fa-solid fa-star"
                      ></i>
                      <i
                        style={{ color: "lightgray" }}
                        className="fa-solid fa-star"
                      ></i>
                      <i
                        style={{ color: "lightgray" }}
                        className="fa-solid fa-star"
                      ></i>
                      <i
                        style={{ color: "lightgray" }}
                        className="fa-solid fa-star"
                      ></i>
                    </div>
                  )}
                  {wholeAverage === 2 && (
                    <div>
                      <i
                        style={{ color: "gold" }}
                        className="fa-solid fa-star"
                      ></i>
                      <i
                        style={{ color: "gold" }}
                        className="fa-solid fa-star"
                      ></i>
                      <i
                        style={{ color: "lightgray" }}
                        className="fa-solid fa-star"
                      ></i>
                      <i
                        style={{ color: "lightgray" }}
                        className="fa-solid fa-star"
                      ></i>
                      <i
                        style={{ color: "lightgray" }}
                        className="fa-solid fa-star"
                      ></i>
                    </div>
                  )}
                  {wholeAverage === 3 && (
                    <div>
                      <i
                        style={{ color: "gold" }}
                        className="fa-solid fa-star"
                      ></i>
                      <i
                        style={{ color: "gold" }}
                        className="fa-solid fa-star"
                      ></i>
                      <i
                        style={{ color: "gold" }}
                        className="fa-solid fa-star"
                      ></i>
                      <i
                        style={{ color: "lightgray" }}
                        className="fa-solid fa-star"
                      ></i>
                      <i
                        style={{ color: "lightgray" }}
                        className="fa-solid fa-star"
                      ></i>
                    </div>
                  )}
                  {wholeAverage === 4 && (
                    <div>
                      <i
                        style={{ color: "gold" }}
                        className="fa-solid fa-star"
                      ></i>
                      <i
                        style={{ color: "gold" }}
                        className="fa-solid fa-star"
                      ></i>
                      <i
                        style={{ color: "gold" }}
                        className="fa-solid fa-star"
                      ></i>
                      <i
                        style={{ color: "gold" }}
                        className="fa-solid fa-star"
                      ></i>
                      <i
                        style={{ color: "lightgray" }}
                        className="fa-solid fa-star"
                      ></i>
                    </div>
                  )}
                  {wholeAverage === 5 && (
                    <div>
                      <i
                        style={{ color: "gold" }}
                        className="fa-solid fa-star"
                      ></i>
                      <i
                        style={{ color: "gold" }}
                        className="fa-solid fa-star"
                      ></i>
                      <i
                        style={{ color: "gold" }}
                        className="fa-solid fa-star"
                      ></i>
                      <i
                        style={{ color: "gold" }}
                        className="fa-solid fa-star"
                      ></i>
                      <i
                        style={{ color: "gold" }}
                        className="fa-solid fa-star"
                      ></i>
                    </div>
                  )}
                </div>
                <div>&nbsp;{`(${reviewArr.length})`}</div>
              </div>
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
                  <div className="trail_detail_bottom_avgstar">
                    {trail?.averagestar}
                  </div>
                  <div style={{ textAlign: "center" }}>
                    {wholeAverage === 1 && (
                      <div>
                        <i
                          style={{ color: "gold" }}
                          className="fa-solid fa-star"
                        ></i>
                        <i
                          style={{ color: "lightgray" }}
                          className="fa-solid fa-star"
                        ></i>
                        <i
                          style={{ color: "lightgray" }}
                          className="fa-solid fa-star"
                        ></i>
                        <i
                          style={{ color: "lightgray" }}
                          className="fa-solid fa-star"
                        ></i>
                        <i
                          style={{ color: "lightgray" }}
                          className="fa-solid fa-star"
                        ></i>
                      </div>
                    )}
                    {wholeAverage === 2 && (
                      <div>
                        <i
                          style={{ color: "gold" }}
                          className="fa-solid fa-star"
                        ></i>
                        <i
                          style={{ color: "gold" }}
                          className="fa-solid fa-star"
                        ></i>
                        <i
                          style={{ color: "lightgray" }}
                          className="fa-solid fa-star"
                        ></i>
                        <i
                          style={{ color: "lightgray" }}
                          className="fa-solid fa-star"
                        ></i>
                        <i
                          style={{ color: "lightgray" }}
                          className="fa-solid fa-star"
                        ></i>
                      </div>
                    )}
                    {wholeAverage === 3 && (
                      <div>
                        <i
                          style={{ color: "gold" }}
                          className="fa-solid fa-star"
                        ></i>
                        <i
                          style={{ color: "gold" }}
                          className="fa-solid fa-star"
                        ></i>
                        <i
                          style={{ color: "gold" }}
                          className="fa-solid fa-star"
                        ></i>
                        <i
                          style={{ color: "lightgray" }}
                          className="fa-solid fa-star"
                        ></i>
                        <i
                          style={{ color: "lightgray" }}
                          className="fa-solid fa-star"
                        ></i>
                      </div>
                    )}
                    {wholeAverage === 4 && (
                      <div>
                        <i
                          style={{ color: "gold" }}
                          className="fa-solid fa-star"
                        ></i>
                        <i
                          style={{ color: "gold" }}
                          className="fa-solid fa-star"
                        ></i>
                        <i
                          style={{ color: "gold" }}
                          className="fa-solid fa-star"
                        ></i>
                        <i
                          style={{ color: "gold" }}
                          className="fa-solid fa-star"
                        ></i>
                        <i
                          style={{ color: "lightgray" }}
                          className="fa-solid fa-star"
                        ></i>
                      </div>
                    )}
                    {wholeAverage === 5 && (
                      <div>
                        <i
                          style={{ color: "gold" }}
                          className="fa-solid fa-star"
                        ></i>
                        <i
                          style={{ color: "gold" }}
                          className="fa-solid fa-star"
                        ></i>
                        <i
                          style={{ color: "gold" }}
                          className="fa-solid fa-star"
                        ></i>
                        <i
                          style={{ color: "gold" }}
                          className="fa-solid fa-star"
                        ></i>
                        <i
                          style={{ color: "gold" }}
                          className="fa-solid fa-star"
                        ></i>
                      </div>
                    )}
                  </div>
                  <div className="trail_detail_bottom_totalreview">
                    {reviewArr.length} Reviews
                  </div>
                </div>
                <div className="trail_detail_bottom_writereview">
                  <CreateReviewModal user={user} />
                </div>
              </div>
              <div>
                {reviewArr.map((review, i) => (
                  <div className="trail_detail_bottom_main_review" key={i}>
                    <div className="trail_detail_bottom_profileinfo">
                      <div>
                        <img alt="profilepic" />
                      </div>
                      <div>
                        <div>
                          {review.firstname}&nbsp;{review.lastname}
                        </div>
                        <div>review date</div>
                      </div>
                    </div>
                    <div>
                      <div className="trail_detail_bottom_reviewinfo">
                        <div className="trail_detail_bottom_reviewcomponents">
                          {review.stars === 1 && (
                            <div>
                              <i
                                style={{ color: "gold" }}
                                className="fa-solid fa-star"
                              ></i>
                              <i
                                style={{ color: "lightgray" }}
                                className="fa-solid fa-star"
                              ></i>
                              <i
                                style={{ color: "lightgray" }}
                                className="fa-solid fa-star"
                              ></i>
                              <i
                                style={{ color: "lightgray" }}
                                className="fa-solid fa-star"
                              ></i>
                              <i
                                style={{ color: "lightgray" }}
                                className="fa-solid fa-star"
                              ></i>
                            </div>
                          )}
                          {review.stars === 2 && (
                            <div>
                              <i
                                style={{ color: "gold" }}
                                className="fa-solid fa-star"
                              ></i>
                              <i
                                style={{ color: "gold" }}
                                className="fa-solid fa-star"
                              ></i>
                              <i
                                style={{ color: "lightgray" }}
                                className="fa-solid fa-star"
                              ></i>
                              <i
                                style={{ color: "lightgray" }}
                                className="fa-solid fa-star"
                              ></i>
                              <i
                                style={{ color: "lightgray" }}
                                className="fa-solid fa-star"
                              ></i>
                            </div>
                          )}
                          {review.stars === 3 && (
                            <div>
                              <i
                                style={{ color: "gold" }}
                                className="fa-solid fa-star"
                              ></i>
                              <i
                                style={{ color: "gold" }}
                                className="fa-solid fa-star"
                              ></i>
                              <i
                                style={{ color: "gold" }}
                                className="fa-solid fa-star"
                              ></i>
                              <i
                                style={{ color: "lightgray" }}
                                className="fa-solid fa-star"
                              ></i>
                              <i
                                style={{ color: "lightgray" }}
                                className="fa-solid fa-star"
                              ></i>
                            </div>
                          )}
                          {review.stars === 4 && (
                            <div>
                              <i
                                style={{ color: "gold" }}
                                className="fa-solid fa-star"
                              ></i>
                              <i
                                style={{ color: "gold" }}
                                className="fa-solid fa-star"
                              ></i>
                              <i
                                style={{ color: "gold" }}
                                className="fa-solid fa-star"
                              ></i>
                              <i
                                style={{ color: "gold" }}
                                className="fa-solid fa-star"
                              ></i>
                              <i
                                style={{ color: "lightgray" }}
                                className="fa-solid fa-star"
                              ></i>
                            </div>
                          )}
                          {review.stars === 5 && (
                            <div>
                              <i
                                style={{ color: "gold" }}
                                className="fa-solid fa-star"
                              ></i>
                              <i
                                style={{ color: "gold" }}
                                className="fa-solid fa-star"
                              ></i>
                              <i
                                style={{ color: "gold" }}
                                className="fa-solid fa-star"
                              ></i>
                              <i
                                style={{ color: "gold" }}
                                className="fa-solid fa-star"
                              ></i>
                              <i
                                style={{ color: "gold" }}
                                className="fa-solid fa-star"
                              ></i>
                            </div>
                          )}
                          <div>{review.review}</div>
                        </div>
                        <div>
                          <div>review img</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="trail_detail_sidebar">
            <div className="trail_detail_near_div">
              <div className="trail_detail_sidebar_inner">
                <div className="trail_detail_near_text">
                  Nearby trails in {trail?.resort}
                </div>
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
                          {trail.difficulty === "Beginner" ? (
                            <div className="trail_detail_difficulty_beginner">
                              <i className="fa-solid fa-circle fa-xs"></i>
                              &nbsp;
                              {trail.difficulty}
                              &nbsp;·&nbsp;
                            </div>
                          ) : trail.difficulty === "Intermediate" ? (
                            <div className="trail_detail_difficulty_intermediate">
                              <i className="fa-solid fa-square fa-xs"></i>
                              &nbsp;
                              {trail.difficulty}
                              &nbsp;·&nbsp;
                            </div>
                          ) : trail.difficulty === "Black Diamond" ? (
                            <div className="trail_detail_difficulty_blackdiamond">
                              <i className="fa-solid fa-diamond fa-xs"></i>
                              &nbsp;
                              {trail.difficulty}
                              &nbsp;·&nbsp;
                            </div>
                          ) : (
                            <div className="trail_detail_difficulty_doubleblackdiamond">
                              <i className="fa-solid fa-diamond fa-xs"></i>
                              <i className="fa-solid fa-diamond fa-xs"></i>
                              &nbsp;
                              {trail.difficulty}
                              &nbsp;·&nbsp;
                            </div>
                          )}
                          <div className="trail_detail_sidebar_review_info">
                            <i className="fa-solid fa-star fa-sm"></i>
                            <div>{trail?.averagestar}&nbsp;</div>
                            <div>{`(${reviewArr.length})`}</div>
                          </div>
                        </div>
                        <div className="trail_detail_sidebar_name">
                          {trail.name}
                        </div>
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