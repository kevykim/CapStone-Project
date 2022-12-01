import { useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { thunkUpdateTrailReview } from "../../store/review";

function UpdateReview({ setShowModal, review }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [stars, setStars] = useState(review.stars);
  const [reviews, setReviews] = useState(review.review);
  const [submitted, setSubmitted] = useState(false);
  const [reviewImg, setReviewImg] = useState(review?.reviewImg);
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

  const addImage = (event) => {
    if (event.target.files.length === 1) {
      let file = event.target.files[0];
      const src = String(URL.createObjectURL(file));
      const previewImage = document.getElementById("updatedreview");
      previewImage.src = src;
      document.getElementById("previousreview").style["display"] = "none";
      setReviewImg(file);
    }
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
    <div className="update_review_main">
      <form className="update_review_form" onSubmit={onSubmit}>
        <div className="update_review_cancel">
          <button className="update_review_cancel_button" onClick={closeModal}>
            X
          </button>
        </div>
        <div className="update_review_trail_name_header">{review?.trailname}</div>
        <div className="update_review_inner">
          <div className="update_review_inner_div">
            <div className="update_review_label_div">
              <div style={{ marginBottom: "15px" }}>Stars</div>
              {validations.length > 0 &&
                submitted === true &&
                (stars <= 0 || stars > 5) && (
                  <div className="update_review_error">&nbsp;*</div>
                )}
            </div>
            {/* <select
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
            </select> */}
            <span>
              {["star1", "star2", "star3", "star4", "star5"].map((star, i) => {
                return (
                  <label>
                    <input
                      style={{ display: "none" }}
                      type="radio"
                      value={stars}
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
                <div className="update_review_error">
                  Select a star between 1 to 5
                </div>
              )}
          </div>
          <div className="update_review_inner_div_textarea">
            <div className="update_review_label_div">
              <div>Review</div>
              {validations.length > 0 &&
                submitted === true &&
                (reviews.length < 20 || reviews.length >= 501) && (
                  <div className="update_review_error">&nbsp;*</div>
                )}
            </div>
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
              (reviews.length < 20 || reviews.length >= 501) && (
                <div className="update_review_error">
                  Please add a review between 21 to 500 characters
                </div>
              )}
          </div>
          <div className="update_review_image_div">
            <div className="update_review_inner_div_image">
              {/* <div className="update_review_label_div"> */}
              <div>Review Image (Optional)</div>
              {/* {reviewImg.length > 0 &&
                  submitted === true &&
                  imageValidate && (
                    <div className="update_review_error">&nbsp;*</div>
                  )} */}
              {/* </div> */}
            </div>
            <label className="update_review_image_input">
              <input
                type="file"
                accept="image/*"
                placeholder="Share a picture of your experience."
                // value={reviewImg}
                onChange={addImage}
                // className="update_review_input_image"
              />
              <div className="update_review_imageselect_text">
                Select Image File
              </div>
              <i
                style={{
                  color: "rgb(60, 103, 148)",
                  zIndex: 1,
                  textShadow: "0.5px 1px 2.5px  white",
                }}
                className="fa-solid fa-camera fa-xl"
              ></i>
              <img
                id="updatedreview"
                // onError="this.style.display='none'"
                onError={(event) => {
                  event.currentTarget.src =
                    "https://images.pexels.com/photos/7165180/pexels-photo-7165180.jpeg";
                }}
                alt="review"
                src=""
              />
              <img
                id="previousreview"
                // onError="this.style.display='none'"
                onError={(event) => {
                  event.currentTarget.src =
                    "https://images.pexels.com/photos/7165180/pexels-photo-7165180.jpeg";
                }}
                alt="previousreview"
                src={reviewImg}
              />
            </label>
          </div>

          {/* {reviewImg.length > 0 && submitted === true && imageValidate && (
              <div className="update_review_error">
              Please enter a valid url image
              </div>
            )} */}
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