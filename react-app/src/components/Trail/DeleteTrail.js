import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { thunkDeleteTrail } from '../../store/trail'


import './DeleteTrail.css'


function DeleteTrail({trail, setShowModal}) {
    const dispatch = useDispatch()
    const history = useHistory()

    const onDelete = async event => {
        await dispatch(thunkDeleteTrail(trail.id))
        history.push('/trails')
        setShowModal(false);

    }

    const onKeep = (event) => {
      setShowModal(false);
    };


    return (
      <div className="delete_trail_main">
        <div className="delete_trail_inner">
          <div className="delete_trail_header">Delete Trail?</div>
          <div>A trail that is deleted will never be recovered.</div>
          <button className="delete_trail_button" onClick={onDelete}>
            Delete
          </button>
          <button className="delete_trail_keep" onClick={onKeep}>
            Keep
          </button>
        </div>
      </div>
    );
}


export default DeleteTrail