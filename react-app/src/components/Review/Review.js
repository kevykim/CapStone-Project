import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, NavLink } from 'react-router-dom'
import { thunkGetCurrentReview } from '../../store/review'
import { thunkGetCurrentTrail } from '../../store/trail'
import DeleteReviewModal from './DeleteReviewModal'
import './Review.css'
import UpdateReviewModal from './UpdateReviewModal'


function Review() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.session.user);
  const currentReviews = useSelector((state) => state.review);
  const currentReviewsArr = Object.values(currentReviews);

  const currentReviewOwned = currentReviewsArr.filter((review) => review?.userId === user?.id)

  useEffect(() => {
    dispatch(thunkGetCurrentTrail());
    dispatch(thunkGetCurrentReview());
  }, [dispatch]);


  if (!user) history.push("/");

  // DATE

  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  let defaultImg =
    "https://www.pngkit.com/png/full/128-1280585_user-icon-fa-fa-user-circle.png";

  return (
    <div className="my_review_main">
      <div className="my_review_inner_div">
        <div className="my_review_top_text">
          <div>Member</div>
          <div>&nbsp;›&nbsp;</div>
          <div>
            {user?.firstName}
            &nbsp;
            {user?.lastName}
          </div>
          <div>&nbsp;›&nbsp;</div>
          <div>Reviews</div>
        </div>
        <div className="my_review_border"></div>
        <div className="my_review_header">Reviews</div>
        {currentReviewsArr.length === 0 ? (
          <div className="my_review_noneleft_div">
            <div className="my_review_noneleft_inner">
              <div className="my_review_noneleft_text">No reviews here...</div>
              <img
                className="my_review_noneleft_img"
                src="https://www.outsideonline.com/wp-content/uploads/2019/02/21/snowboard-instructor-fail_s.jpg"
                alt="fail"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://www.outsideonline.com/wp-content/uploads/2019/02/21/snowboard-instructor-fail_s.jpg";
                }}
              />
              <NavLink className="my_review_noneleft_navlink" exact to="/">
                Return Home
              </NavLink>
            </div>
          </div>
        ) : (
          <div className="my_review_box_main">
            {currentReviewOwned.map((review, i) => (
              <div
                style={{
                  borderBottom: "1px solid rgb(205, 201, 200)",
                  height: "300px",
                  marginRight: "25px",
                  marginLeft: "25px",
                  marginBottom: "25px",
                }}
                className="my_review_box_main"
                key={i}
              >
                <div className="my_review_box_main_firstline">
                  <div className="my_review_box_img_div">
                    <img
                      className="my_review_box_img_main"
                      src={!user?.profileImg ? defaultImg : user?.profileImg}
                      alt="profileimg"
                      onError={(event) => {
                        event.currentTarget.src =
                          "https://www.pngkit.com/png/full/128-1280585_user-icon-fa-fa-user-circle.png";
                      }}
                    />{" "}
                  </div>
                  <div>
                    <div>
                      <span className="my_review_boldname">
                        {review.firstname}&nbsp;{review.lastname}
                      </span>{" "}
                      reviewed&nbsp;
                      <NavLink
                        className="my_review_navlink"
                        exact
                        to={`/trails/${review.trailId}`}
                      >
                        {review.trailname}
                      </NavLink>
                    </div>
                    <div className="my_review_difficulty_main">
                      <div>
                        {`${new Date(review.createdAt).toLocaleDateString(
                          undefined,
                          options
                        )}`}{" "}
                        •&nbsp;
                      </div>
                      <div>
                        {review?.traildifficulty === "Beginner" ? (
                          <div className="my_review_difficulty_beginner">
                            <i className="fa-solid fa-circle fa-xs"></i>
                            &nbsp;
                            {review?.traildifficulty}
                          </div>
                        ) : review?.traildifficulty === "Intermediate" ? (
                          <div className="my_review_difficulty_intermediate">
                            <i className="fa-solid fa-square fa-xs"></i>
                            &nbsp;
                            {review?.traildifficulty}
                          </div>
                        ) : review?.traildifficulty === "Black Diamond" ? (
                          <div className="my_review_difficulty_blackdiamond">
                            <i className="fa-solid fa-diamond fa-xs"></i>
                            &nbsp;
                            {review?.traildifficulty}
                          </div>
                        ) : (
                          <div className="my_review_difficulty_doubleblackdiamond">
                            <i className="fa-solid fa-diamond fa-xs"></i>
                            <i className="fa-solid fa-diamond fa-xs"></i>
                            &nbsp;
                            {review?.traildifficulty}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my_review_main_star">
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
                </div>
                <div className="my_review_main_reviewimage">
                  <div className="my_review_main_review">{review.review}</div>
                  {review.reviewImg && <div>
                    <img
                      src={review.reviewImg}
                      alt="reviewimg"
                      className="my_review_image_"
                      onError={(event) => {
                        event.currentTarget.src =
                          "https://png.pngtree.com/png-vector/20190729/ourlarge/pngtree-mountains-nature-outdoor-sun-hiking-flat-color-icon-vector-png-image_1622135.jpg";
                      }}
                    />
                  </div>}
                </div>
                <div className="my_review_main_buttons">
                  <div>
                    <DeleteReviewModal review={review} />
                  </div>
                  <div>&nbsp;|&nbsp;</div>
                  <div>
                    <UpdateReviewModal review={review} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}






export default Review