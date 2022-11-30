import { NavLink, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import {  thunkGetTrail } from "../../store/trail"
import { thunkGetSingleTrail } from "../../store/trail"
import CreateReviewModal from "../Review/CreateReviewModal"

import './TrailDetail.css'
import { thunkGetTrailReview } from "../../store/review"
import PhotosModal from "../Modals/PhotosModal"
import ShareModal from "../Modals/ShareModal"
import MoreModal from "../Modals/MoreModal"
import TrailDetailSearchBar from "../SearchBar/TrailDetailSearchBar"
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
    // const wholeAverage = Math.round(trail?.averagestar)
    // console.log(wholeAverage)

     const allReviews = reviewArr.map((review) => review.stars);
     let sum = 0;

     for (let i = 0; i < allReviews.length; i++) {
       sum += allReviews[i];
     }

     let average = Math.round(sum / reviewArr.length)

     if (!average) {
        average = 0
     }
    //  console.log(average)

    useEffect(() => {
      dispatch(thunkGetSingleTrail(id))
      dispatch(thunkGetTrailReview(id))
      dispatch(thunkGetTrail())
    }, [dispatch, id])


    // DATE

    const options = {
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    }

   

    let defaultImg = "https://www.pngkit.com/png/full/128-1280585_user-icon-fa-fa-user-circle.png"

    return (
      <>
        <div className="trail_detail_main">
          <div className="trail_detail_top_main">
            <div className="trail_detail_top_text">
              <div className="trail_detail_navlink">
                <NavLink
                  style={{
                    textDecoration: "none",
                    color: "rgb(132, 132, 132)",
                  }}
                  exact
                  to={`/${trail?.country}`}
                >
                  {trail?.country}
                </NavLink>
              </div>
              <div>&nbsp;›&nbsp;</div>
              <div className="trail_detail_navlink">
                <NavLink
                  style={{
                    textDecoration: "none",
                    color: "rgb(132, 132, 132)",
                  }}
                  exact
                  to={`/${trail?.state}`}
                >
                  {trail?.state}
                </NavLink>
              </div>
              <div>&nbsp;›&nbsp;</div>
              <div className="trail_detail_navlink">
                <NavLink
                  style={{
                    textDecoration: "none",
                    color: "rgb(132, 132, 132)",
                  }}
                  exact
                  to={`/${trail?.resort}`}
                >
                  {trail?.resort}
                </NavLink>
              </div>
              <div>&nbsp;›&nbsp;</div>
              <div className="trail_detail_top_name">{trail?.name}</div>
            </div>
            <div>
            <TrailDetailSearchBar />
            </div>
          </div>
          <div className="trail_detail_image_div">
            <img
              className="trail_detail_previewImg"
              src={trail?.previewImg}
              alt="traildetail"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.pexels.com/photos/6650184/pexels-photo-6650184.jpeg";
              }}
            />
            <div>
              <div className="trail_detail_bluebar"></div>
            </div>
            <div className="trail_detail_circle">
              <div className="trail_detail_circle_inner">
                <div className="trail_detail_circle_text">
                  <PhotosModal trail={trail} />
                </div>
              </div>
              <div className="trail_detail_circle_inner">
                <div className="trail_detail_circle_text">
                  <ShareModal trail={trail} />
                </div>
              </div>
              <div className="trail_detail_circle_inner">
                <div className="trail_detail_circle_text">
                  <MoreModal trail={trail} />
                </div>
              </div>
            </div>
          </div>
          <div className="trail_detail_image_text">
            <div className="trail_detail_image_firstline">{trail?.name}</div>
            <div className="trail_detail_image_secondline">
              {trail?.difficulty === "Beginner" ? (
                <div className="trail_detail_difficulty_beginner_box">
                  <i className="fa-solid fa-circle fa-xs"></i>
                  &nbsp;
                  {trail?.difficulty}
                </div>
              ) : trail?.difficulty === "Intermediate" ? (
                <div className="trail_detail_difficulty_intermediate_box">
                  <i className="fa-solid fa-square fa-xs"></i>
                  &nbsp;
                  {trail?.difficulty}
                </div>
              ) : trail?.difficulty === "Black Diamond" ? (
                <div className="trail_detail_difficulty_blackdiamond_box">
                  <i className="fa-solid fa-diamond fa-xs"></i>
                  &nbsp;
                  {trail?.difficulty}
                </div>
              ) : (
                <div className="trail_detail_difficulty_doubleblackdiamond_box">
                  <i className="fa-solid fa-diamond fa-xs"></i>
                  <i className="fa-solid fa-diamond fa-xs"></i>
                  &nbsp;
                  {trail?.difficulty}
                </div>
              )}
              <div className="trail_detail_image_reviewinfo">
                <div>
                  {average === 1 && (
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
                  {average === 2 && (
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
                  {average === 3 && (
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
                  {average === 4 && (
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
                  {average === 5 && (
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
                {/* <div>&nbsp;{`(${reviewArr.length})`}</div> */}
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
                  {new Intl.NumberFormat().format(trail?.elevation)} ft
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
                  <div className="trail_detail_bottom_avgstar">{average}</div>
                  <div style={{ textAlign: "center" }}>
                    {average === 1 && (
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
                    {average === 2 && (
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
                    {average === 3 && (
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
                    {average === 4 && (
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
                    {average === 5 && (
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
                      <div className="trail_detail_img_div">
                        <img
                          className="trail_detail_img_main"
                          src={
                            !review.profileImg ? defaultImg : review.profileImg
                          }
                          alt="profilepic"
                          onError={(event) => {
                            event.currentTarget.src =
                              "https://www.pngkit.com/png/full/128-1280585_user-icon-fa-fa-user-circle.png";
                          }}
                        />
                      </div>
                      <div>
                        <div className="trail_detail_firstandlastnames">
                          {review.firstname}&nbsp;{review.lastname}
                        </div>
                        <div>{`${new Date(review.createdAt).toLocaleDateString(
                          undefined,
                          options
                        )}`}</div>
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
                          <div className="trail_detail_actual_reviews">
                            {review.review}
                          </div>
                        </div>
                        <div>
                          {review.reviewImg && (
                            <div>
                              <img
                                className="trail_detail_review_img"
                                src={review.reviewImg}
                                alt="reviewimg"
                                onError={(event) => {
                                  event.currentTarget.src =
                                    "https://png.pngtree.com/png-vector/20190729/ourlarge/pngtree-mountains-nature-outdoor-sun-hiking-flat-color-icon-vector-png-image_1622135.jpg";
                                }}
                              />
                            </div>
                          )}
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
                  <div className="trail_detail_sidebar_inner_div" key={i}>
                    <div className="trail_detail_sidebar_image_div">
                      <div className="trail_detail_sidebar_image">
                        <NavLink exact to={`/trails/${trail.id}`}>
                          <img
                            className="trail_detail_sidebar_image"
                            src={trail.previewImg}
                            alt="nearme"
                            onError={(e) => {
                              e.currentTarget.src =
                                "https://images.pexels.com/photos/6650184/pexels-photo-6650184.jpeg";
                            }}
                          />
                        </NavLink>
                      </div>
                      <div className="trail_detail_sidebar_image_info">
                        <div className="trail_detail_sidebar_firstline">
                          {trail?.difficulty === "Beginner" ? (
                            <div className="trail_detail_difficulty_beginner">
                              <i className="fa-solid fa-circle fa-xs"></i>
                              &nbsp;
                              {trail?.difficulty}
                              &nbsp;·&nbsp;
                            </div>
                          ) : trail?.difficulty === "Intermediate" ? (
                            <div className="trail_detail_difficulty_intermediate">
                              <i className="fa-solid fa-square fa-xs"></i>
                              &nbsp;
                              {trail?.difficulty}
                              &nbsp;·&nbsp;
                            </div>
                          ) : trail?.difficulty === "Black Diamond" ? (
                            <div className="trail_detail_difficulty_blackdiamond">
                              <i className="fa-solid fa-diamond fa-xs"></i>
                              &nbsp;
                              {trail?.difficulty}
                              &nbsp;·&nbsp;
                            </div>
                          ) : (
                            <div className="trail_detail_difficulty_doubleblackdiamond">
                              <i className="fa-solid fa-diamond fa-xs"></i>
                              <i className="fa-solid fa-diamond fa-xs"></i>
                              &nbsp;
                              {trail?.difficulty}
                              &nbsp;·&nbsp;
                            </div>
                          )}
                          <div className="trail_detail_sidebar_review_info">
                            <i className="fa-solid fa-star fa-sm"></i>
                            <div>{trail?.averagestar}&nbsp;</div>
                            {/* <div>{`(${reviewArr.length})`}</div> */}
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