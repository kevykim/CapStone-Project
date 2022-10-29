import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { thunkGetCurrentReview } from '../../store/review'
import './Review.css'
import UpdateReviewModal from './UpdateReviewModal'


function Review() {
const dispatch = useDispatch()
const history = useHistory()

    const user = useSelector(state => state.session.user)
    const currentReviews = useSelector(state => state.review)
    const currentReviewsArr = Object.values(currentReviews)


    useEffect(() => {
        dispatch(thunkGetCurrentReview())
    },[dispatch])
    console.log(currentReviewsArr)

    if (!user) history.push('/')

    return (
      <div>
        <div>Reviews</div>
        <div>
          {currentReviewsArr === 0 ? (
            <div>Let's review some trails</div>
          ) : (
            <div>
              {currentReviewsArr.map((review, i) => (
                <div>
                  <div>
                    <div>profileimage</div>
                    <div>
                      <div>first and last name "reviewed" trail name</div>
                      <div>Full date • difficulty</div>
                    </div>
                  </div>
                  <div>{review.stars}</div>
                  <div>{review.review}</div>
                  <div>
                    <div>Delete</div>
                    <div><UpdateReviewModal review={review} /></div>
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