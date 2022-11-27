import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams, NavLink } from 'react-router-dom'
import { thunkCreateTrailReview } from '../../store/review'

import './CreateReview.css'



function CreateReview({ setShowModal, user }) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

  const trail = useSelector((state) => state.trail[id]);
  // console.log(trail.userId)

  const [stars, setStars] = useState("");
  const [reviews, setReviews] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [reviewImg, setReviewImg] = useState("");
  const [covered, setCovered] = useState("");
  const [validations, setValidations] = useState([]);

  useEffect(() => {
    const errors = [];
    if (stars <= 0 || stars > 5) errors.push("Select a star between 1 to 5");
    if (reviews.length < 20 || reviews.length >= 501)
      errors.push("Please add a review between 21 to 500 characters");
    // if (
    //   (!reviewImg.includes("jpg") &&
    //     !reviewImg.includes("png") &&
    //     !reviewImg.includes("jpeg") &&
    //     !reviewImg.includes("svg") &&
    //     !reviewImg.includes(".gif")) ||
    //   (!reviewImg.includes("https") && !reviewImg.includes("http"))
    // )
    //   errors.push("Please enter a valid url image");

    setValidations(errors);
  }, [stars, reviews, reviewImg]);

  const closeModal = (event) => {
    setShowModal(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(!submitted);
    const payload = {
      trailId: id,
      stars,
      review: reviews,
      reviewImg,
    };

    let createdReviewData = await dispatch(thunkCreateTrailReview(payload));

    if (createdReviewData) {
      history.push(`/trails/${payload.trailId}`);
      setShowModal(false);
    }
  };

    const addReviewImage = (event) => {
      const file = event.target.files[0];
      setReviewImg(file);
    };

  // let ratings = [1, 2, 3, 4, 5];

  //IMAGE VALIDATION
  // const imageValidate =
  //   (!reviewImg.endsWith(".jpg") &&
  //     !reviewImg.endsWith(".png") &&
  //     !reviewImg.endsWith(".jpeg") &&
  //     !reviewImg.endsWith(".svg") &&
  //     !reviewImg.endsWith(".gif")) ||
  //   (!reviewImg.startsWith("http://") && !reviewImg.startsWith("https://"));

  // const imageValidate =
  //   (!reviewImg.includes(".jpg") &&
  //     !reviewImg.includes(".png") &&
  //     !reviewImg.includes(".jpeg") &&
  //     !reviewImg.includes(".svg") &&
  //     !reviewImg.includes(".gif")) ||
  //   (!reviewImg.includes("https") && !previewImg.includes("http"));

  return (
    <div className="create_review_main">
      {!user ? (
        <div className="create_review_notlogged_main">
          <button
            className="create_review_notlogged_cancel_button"
            onClick={closeModal}
          >
            x
          </button>
          <div className="create_review_notlogged">
            You must log in to make a review...
          </div>
          <NavLink
            className="create_review_notlogged_navlink"
            exact
            to="/login"
          >
            Log in
          </NavLink>
        </div>
      ) : trail?.userId === user?.id ? (
        <div className="create_review_owned_main">
          <button className="create_review_cancel_button" onClick={closeModal}>
            x
          </button>
          <div className="create_review_notlogged">
            Cannot make reviews on your own trails...
          </div>
        </div>
      ) : (
        <form className="create_review_form" onSubmit={onSubmit}>
          <div className="create_review_cancel">
            <button
              className="create_review_cancel_button"
              onClick={closeModal}
            >
              x
            </button>
          </div>
          <div className="create_review_trail_name_header">{trail?.name}</div>
          <div className="create_review_inner">
            <div className="create_review_inner_div">
              <div className="create_review_label_div">
                <div style={{marginBottom:'15px'}}>Stars</div>
                {validations.length > 0 &&
                  submitted === true &&
                  (stars <= 0 || stars > 5) && (
                    <div className="create_review_error">&nbsp;*</div>
                  )}
              </div>
              {/* <select
                name="stars"
                value={stars}
                onChange={(event) => setStars(event.target.value)}
                className="create_review_input_inner"
              >
                <option value="" disabled>
                  Select a star
                </option>
                {ratings.map((rating, i) => (
                  <option key={i} value={rating}>
                    {rating}
                  </option>
                ))}
              </select> */}
              <span>
              {["star1", "star2", "star3", "star4", "star5"].map((star, i) => {
                return (
                  <label>
                    <input
                      style={{ display: "none" }}
                      type="radio"
                      value={i}
                      onClick={(event) => setStars(i++)}
                    />
                    <i
                      style={{
                        transition: "0.5s",
                        color: i++ < (covered || stars) ? "gold" : "lightgray",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(event) => setCovered(i++)}
                      onMouseLeave={(event) => setCovered("")}
                      className="fa-solid fa-star fa-2xl"
                    ></i>
                  </label>
                );
              })}
            </span>
              {validations.length > 0 &&
                submitted === true &&
                (stars <= 0 || stars > 5) && (
                  <div className="create_review_error">
                    Select a star between 1 to 5
                  </div>
                )}
            </div>
            <div className="create_review_inner_div_textarea">
              <div className="create_review_label_div">
                <div>Review</div>
                {validations.length > 0 &&
                  submitted === true &&
                  (reviews.length < 20 || reviews.length >= 501) && (
                    <div className="create_review_error">&nbsp;*</div>
                  )}
              </div>
              <textarea
                type="text-area"
                name="review"
                placeholder="Give back to the community. Let people know what you think of the trail so they can prepare."
                value={reviews}
                onChange={(event) => setReviews(event.target.value)}
                className="create_review_input_textarea"
              ></textarea>
              {validations.length > 0 &&
                submitted === true &&
                (reviews.length < 20 || reviews.length >= 501) && (
                  <div className="create_review_error">
                    Please add a review between 21 to 500 characters
                  </div>
                )}
            </div>
            {/* <div className="create_review_inner_div_image"> */}
              {/* <div className="create_review_label_div"> */}
                {/* <div>Review Image (Optional)</div> */}
                {/* {reviewImg.length > 0 &&
                  submitted === true &&
                  imageValidate && (
                    <div className="create_review_error">&nbsp;*</div>
                  )} */}
              {/* </div> */}
              <div className='testing_input_div'>
                <label className='testing_input'>
              <input
                type="file"
                accept='image/*'
                placeholder="Share a picture of your experience."
                // value={reviewImg}
                onChange={addReviewImage}
                // className="create_review_input_image"
              />
              </label>
              </div>
              {/* {reviewImg.length > 0 && submitted === true && imageValidate && (
                <div className="create_review_error">
                  Please enter a valid url image
                </div>
              )} */}
            {/* </div> */}
            {/* {validations.length > 0 && submitted && (
              <div>
                {validations.map((error, i) => (
                  <div key={i}>{error}</div>
                ))}
              </div>
            )} */}
            <div className="create_review_submit">
              <button
                type="submit"
                // disabled={validations.length > 0 && submitted}
                className="create_review_submit_button"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}



export default CreateReview