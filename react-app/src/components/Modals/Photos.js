import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { thunkGetCurrentTrail, thunkGetTrail } from '../../store/trail'

import './PhotosModal.css'


function Photos({trail, setShowModal}) {
  const dispatch = useDispatch()
    const reviewImages = trail.reviews.map(reviews => reviews.reviewImg)

        const closeModal = (event) => {
            setShowModal(false)
        }

    useEffect(() => {
      dispatch(thunkGetTrail())
    }, [dispatch])

    return (
      <>
      <div className='photo_modal_cancel_div'>
          <button className="photo_modal_cancel_button" onClick={closeModal}>
            x
          </button>
      </div>
        <div className="photo_modal_text">Photos of {trail.name}</div>
        <div className="photo_modal_main">
          {reviewImages.map((image, i) => (
            <div className="photo_modal_inner" key={i}>
              <img
                className="photo_modal_image"
                src={image}
                alt="reviewimg"
                onError={(event) => {
                  event.currentTarget.src =
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPa4_Kyvffe_glSxOxK6jNM54hOHPHxuXAso_XuTVQ2c1tO59glVHLXyFbTvx68Q6Veqs&usqp=CAU";
                }}
              />
            </div>
          ))}
        </div>
      </>
    );
}

export default Photos