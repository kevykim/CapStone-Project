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
        <button className='delete_trail_button' onClick={onDelete}>Delete</button>
    )
}


export default DeleteTrail