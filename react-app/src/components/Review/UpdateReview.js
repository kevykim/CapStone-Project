import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { thunkUpdateTrailReview } from "../../store/review";

function UpdateReview({ setShowModal, review }) {
  const dispatch = useDispatch();
  const {id} = useParams();
  const history = useHistory();

  const trail = useSelector((state) => state.trail[id]);


  const [stars, setStars] = useState(review.stars);
  const [reviews, setReviews] = useState(review.review);
  const [submitted, setSubmitted] = useState(false);
  const [reviewImg, setReviewImg] = useState(review.reviewImg);
  const [validations, setValidations] = useState([]);

  useEffect(() => {
    const errors = [];
    if (stars <= 0 || stars > 5) errors.push("Select a star between 1 to 5");
    if (reviews.length < 20 || reviews.length > 255)
      errors.push("Please add a review between 21 to 255 characters");
    if (
      (!reviewImg.includes("jpg") &&
        !reviewImg.includes("png") &&
        !reviewImg.includes("jpeg") &&
        !reviewImg.includes("svg")) ||
      (!reviewImg.includes("https") && !reviewImg.includes("http"))
    )
      errors.push("Please enter a valid url image");

    setValidations(errors);
  }, [stars, reviews, reviewImg]);

  const closeModal = (event) => {
    setShowModal(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(!submitted);
    const payload = {
      id: review.id,
      trailId: review.trailId,
      stars,
      review: reviews,
      reviewImg,
    };

    let updatedReviewData = await dispatch(thunkUpdateTrailReview(payload));

    if (updatedReviewData) {
      history.push(`/reviews`);
      setShowModal(false);
    }
  };

  let ratings = [1, 2, 3, 4, 5];

  //IMAGE VALIDATION
  const imageValidate =
    (!reviewImg.includes(".jpg") &&
      !reviewImg.includes(".png") &&
      !reviewImg.includes(".jpeg") &&
      !reviewImg.includes(".svg")) ||
    (!reviewImg.includes("https") && !reviewImg.includes("http"));

  return (
    <div className="update_review_main">
      <form className="update_review_form" onSubmit={onSubmit}>
        <div className="update_review_cancel">
          <button className="update_review_cancel_button" onClick={closeModal}>
            X
          </button>
        </div>
        <div className="update_review_trail_name_header">{trail?.name}</div>
        <div className="update_review_inner">
          <div className="update_review_inner_div">
            <select
              name="stars"
              value={stars}
              onChange={(event) => setStars(event.target.value)}
              className="update_review_input_inner"
            >
              <option value="" disabled>
                Select a star
              </option>
              {ratings.map((rating, i) => (
                <option key={i} value={rating}>
                  {rating}
                </option>
              ))}
            </select>
            {validations.length > 0 &&
              submitted === true &&
              (stars <= 0 || stars > 5) && (
                <div className="update_review_error">
                  Select a star between 1 to 5
                </div>
              )}
          </div>
          <div className="update_review_inner_div_textarea">
            <textarea
              type="text-area"
              name="review"
              placeholder="Give back to the community. Let people know what you think of the trail so they can prepare."
              value={reviews}
              onChange={(event) => setReviews(event.target.value)}
              className="update_review_input_textarea"
            ></textarea>
            {validations.length > 0 &&
              submitted === true &&
              (reviews.length < 20 || reviews.length > 255) && (
                <div className="update_review_error">
                  Please add a review between 21 to 255 characters
                </div>
              )}
          </div>
          <div className="update_review_inner_div_image">
            <input
              type="text"
              name="reviewImg"
              placeholder="Share a picture of your experience."
              value={reviewImg}
              onChange={(event) => setReviewImg(event.target.value)}
              className="update_review_input_image"
            />
            {validations.length > 0 && submitted === true && imageValidate && (
              <div className="update_review_error">
                Please enter a valid url image
              </div>
            )}
          </div>
          {/* {validations.length > 0 && submitted && (
            <div>
              {validations.map((error, i) => (
                <div key={i}>{error}</div>
              ))}
            </div>
          )} */}
          <div className="update_review_submit">
            <button
              type="submit"
              disabled={validations.length > 0 && submitted}
              className="update_review_submit_button"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}


export default UpdateReview