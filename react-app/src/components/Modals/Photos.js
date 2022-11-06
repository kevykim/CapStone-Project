import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {thunkGetTrail } from '../../store/trail'

import './PhotosModal.css'


function Photos({trail, setShowModal}) {
  const dispatch = useDispatch()
    const reviewImages = trail.reviews.map(reviews => reviews)
    // console.log(trail.reviews)
        const closeModal = (event) => {
            setShowModal(false)
        }

    useEffect(() => {
      dispatch(thunkGetTrail())
    }, [dispatch])

    return (
      <>
        <div className="photo_modal_cancel_div">
          <button className="photo_modal_cancel_button" onClick={closeModal}>
            x
          </button>
        </div>
        <div className="photo_modal_text">Photos of {trail.name}</div>
        <div className="photo_modal_main">
          {reviewImages.map((review, i) => (
            <div className="photo_modal_inner" key={i}>
              <div className="photo_modal_inner_div">
                <img
                  className="photo_modal_image"
                  src={review.reviewImg}
                  alt="reviewimg"
                  onError={(event) => {
                    event.currentTarget.src =
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPa4_Kyvffe_glSxOxK6jNM54hOHPHxuXAso_XuTVQ2c1tO59glVHLXyFbTvx68Q6Veqs&usqp=CAU";
                  }}
                />
                <div className="photo_modal_text_lines">
                  <div className="photo_modal_text_fonts">
                    {review.firstname}&nbsp;{review.lastname}
                  </div>
                  <div className="photo_modal_text_fonts">
                    {review.createdAt}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
}

export default Photos