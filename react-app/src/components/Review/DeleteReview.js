import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { thunkDeleteTrailReview } from "../../store/review";
import "./DeleteReview.css";

function DeleteReview({review, setShowModal}) {
    const dispatch = useDispatch()
    const history = useHistory()


    const onDelete = async (event) => {
        await dispatch(thunkDeleteTrailReview(review.id))
        history.push('/reviews')
        setShowModal(false);

    }

    const onKeep = (event) => {
        setShowModal(false)
    }

  return (
    <div className="delete_review_main">
      <div className="delete_review_inner">
        <div className="delete_review_header">Delete review?</div>
        <div>A review that is deleted will never be recovered.</div>
        <button className="delete_review_button" onClick={onDelete}>Delete</button>
        <button className="delete_review_keep" onClick={onKeep}>Keep</button>
      </div>
    </div>
  );
}

export default DeleteReview;