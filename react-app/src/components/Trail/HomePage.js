import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { thunkGetTrail } from '../../store/trail';


import './HomePage.css'

function HomePage() {
    const dispatch = useDispatch()

    const trail = useSelector(state => state.trail)
    const trailArr = Object.values(trail)

    useEffect(() => {
        dispatch(thunkGetTrail())
    },[dispatch])


    return (
        <div>
      <div className="homepage_main">
        <div className="homepage_image_div">
          <img
            style={{ height: "540px", width: "1265px" }}
            classname="homepage_image"
            src="https://images.pexels.com/photos/1404713/pexels-photo-1404713.jpeg"
            alt="home"
          />
        </div>
        <div className="homepage_text">
          <div>Find your next trail</div>
        </div>
      </div>
        <div>Find your local favorites</div>
        <div>
            {trailArr.map((trail, i) => (
                <div key={i}> 
                <div>
                    <img className='homepage_trail_image' src={trail.previewImg} alt='trailimg'/>
                </div>
                <div>
                <div>
                    <div>
                        {trail.difficulty}
                    </div>
                    <div>
                        star avg and total reviews here
                    </div>
                </div>
                <div>
                    {trail.name}
                </div>
                <div>
                    {trail.resort}
                </div>
                <div>
                    {`Length: ${trail.length} mi`}
                </div>
                </div>
                </div>
            ))}
        </div>
        </div>
    );
}



export default HomePage