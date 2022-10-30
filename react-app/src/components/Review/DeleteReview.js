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
    }

    const onKeep = (event) => {
        setShowModal(false)
    }

  return (
    <div>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onKeep}>Keep</button>
    </div>
  );
}

export default DeleteReview;