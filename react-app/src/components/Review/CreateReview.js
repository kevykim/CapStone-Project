import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { thunkCreateTrailReview } from '../../store/review'


import './CreateReview.css'



function CreateReview({setShowModal}) {
    const dispatch = useDispatch()
    const {id} = useParams()
    const history = useHistory()


    const [stars, setStars] = useState()
    const [reviews, setReviews] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [reviewImg, setReviewImg] = useState('')
    const [validations, setValidations] = useState([])


    useEffect(() => {   
        const errors = []
        if (stars <= 0 || stars > 5) errors.push('Select a star between 1 to 5')
        if (reviews.length < 20 || reviews.length > 255) errors.push('Please add a review between 21 to 255 characters')
        if (
          (!reviewImg.includes("jpg") &&
            !reviewImg.includes("png") &&
            !reviewImg.includes("jpeg") &&
            !reviewImg.includes("svg")) ||
          (!reviewImg.includes("https") && !reviewImg.includes("http"))
        )
          errors.push("Please enter a valid url image");
        
          setValidations(errors)
    }, [stars, reviews, reviewImg])

    const closeModal = (event) => {
        setShowModal(false)
    };

    const onSubmit = async event => {
        event.preventDefault();
        setSubmitted(!submitted)
        const payload = {
            trailId: id,
            stars,
            review: reviews,
            reviewImg
        }
        
        let createdReviewData = await dispatch(thunkCreateTrailReview(payload))

        if (createdReviewData) {
            history.push(`/trails/${payload.trailId}`)
            setShowModal(false)
        }
    }

    let ratings = [1, 2, 3, 4, 5]

    return (
      <div>
        <div>
          <div>
            <button onClick={closeModal}>X</button>
          </div>
          <form style={{height:'500px', width:"500px"}} onSubmit={onSubmit}>
            <div>
                <select
                name='stars'
                value={stars}
                onChange={(event) => setStars(event.target.value)}
                > 
                    {ratings.map((rating, i) => (
                        <option key={i} value={rating}>
                            {rating}
                        </option>
                    ))}  
                </select>
            </div>
            <div>
              <textarea
                type="text-area"
                name="review"
                placeholder="Give back to the community. Let people know what you think of the trail so they can prepare."
                value={reviews}
                onChange={(event) => setReviews(event.target.value)}
              ></textarea>
            </div>
            <div>
              <input
                type="text"
                name="reviewImg"
                placeholder='Share a picture of your experience.'
                value={reviewImg}
                onChange={(event) => setReviewImg(event.target.value)}
              />
            </div>
            {validations.length > 0 && submitted && (
              <div>
                {validations.map((error, i) => (
                  <div key={i}>{error}</div>
                ))}
              </div>
            )}
            <div>
              <button
                type="submit"
                disabled={validations.length > 0 && submitted}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}



export default CreateReview