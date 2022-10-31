import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, NavLink } from 'react-router-dom'
import { thunkGetCurrentReview } from '../../store/review'
import { thunkGetCurrentTrail } from '../../store/trail'
import DeleteReviewModal from './DeleteReviewModal'
import './Review.css'
import UpdateReviewModal from './UpdateReviewModal'


function Review() {
const dispatch = useDispatch()
const history = useHistory()

    const user = useSelector(state => state.session.user)
    const currentReviews = useSelector(state => state.review)
    const currentReviewsArr = Object.values(currentReviews)


    useEffect(() => {
        dispatch(thunkGetCurrentTrail())
        dispatch(thunkGetCurrentReview())
    },[dispatch])
    // console.log(currentReviewsArr)

    if (!user) history.push('/')

    return (
      <div className="my_review_main">
        <div className="my_review_inner_div">
          <div className="my_review_top_text">
            <div>Members</div>
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
          {currentReviewsArr !== 0 ? (
            <div classname="my_review_box_main">
              {currentReviewsArr.map((review, i) => (
                <div
                  style={{
                    borderBottom: "1px solid rgb(205, 201, 200)",
                    height: "300px",
                    marginRight:'25px',
                    marginLeft:'25px'
                  }}
                  classname="my_review_box_main"
                  key={i}
                >
                  <div className="my_review_box_main_firstline">
                    <div>profileimage</div>
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
                      <div>Full date • {review.traildifficulty}</div>
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
                  <div className="my_review_main_review">{review.review}</div>
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
          ) : (
            <div>Let's review some trails</div>
          )}
        </div>
      </div>
    );
}






export default Review