import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { thunkDeleteTrail } from '../../store/trail'


import './DeleteTrail.css'


function DeleteTrail({trail}) {
    const dispatch = useDispatch()
    const history = useHistory()

    const onDelete = async event => {
        await dispatch(thunkDeleteTrail(trail.id))
        history.push('/trails')
    }


    return (
      <div>
        <button className="delete_trail_button" onClick={onDelete}>
          <div className="my_trail_white_circle"></div>
          Delete
        </button>
      </div>
    );
}


export default DeleteTrail