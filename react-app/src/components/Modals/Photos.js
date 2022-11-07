import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {thunkGetTrail } from '../../store/trail'

import './PhotosModal.css'


function Photos({trail, setShowModal}) {
  const dispatch = useDispatch()
    const reviewImages = trail.reviews.map(reviews => reviews)

    const imagesArr = trail.reviews.map(reviews => reviews.reviewImg)
    const httpsfilter = imagesArr.filter(image => image.includes('https'))
    const httpfilter = imagesArr.filter(image => image.includes('http'))
    // console.log(httpfilter)
    // console.log(imagefilter)
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
        <div>
          {(httpsfilter.length === 0 && httpfilter.length === 0) ? (
            <div className="photo_modal_notmain">
              <div>
                No photos here&nbsp;<i className="fa-regular fa-face-frown"></i>
              </div>
            </div>
          ) : (
            <div className="photo_modal_main">
              {reviewImages.map((review, i) => (
                <div key={i}>
                  {review.reviewImg && (
                    <div className="photo_modal_inner">
                      <div className="photo_modal_inner_div">
                        <img
                          className="photo_modal_image"
                          src={review.reviewImg}
                          alt="reviewimg"
                          onError={(event) => {
                            event.currentTarget.src =
                              "https://png.pngtree.com/png-vector/20190729/ourlarge/pngtree-mountains-nature-outdoor-sun-hiking-flat-color-icon-vector-png-image_1622135.jpg";
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
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </>
    );
}

export default Photos