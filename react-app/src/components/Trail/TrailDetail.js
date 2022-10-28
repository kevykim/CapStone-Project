import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { thunkGetSingleTrail } from "../../store/trail"
import CreateReviewModal from "../Review/CreateReviewModal"

import './TrailDetail.css'

function TrailDetail() {
    const {id} = useParams()
    const dispatch = useDispatch()

    const user = useSelector(state => state.session.user)
    const trail = useSelector(state => state.trail[id])


    useEffect(() => {
        dispatch(thunkGetSingleTrail(id))
    }, [dispatch, id])

    return (
      <>
        <div className="trail_detail_main">
          <div className="trail_detail_top_text">
            <div>{trail?.country}</div>
            <div>{trail?.state}</div>
            <div>{trail?.resort}</div>
            <div>{trail?.name}</div>
          </div>
          <div className="trail_detail_image_div">
            <img
              className="trail_detail_previewImg"
              src={trail?.previewImg}
              alt="traildetail"
            />
            <div>
              <div className="trail_detail_bluebar"></div>
            </div>
            <div className="trail_detail_circle">
              <div className="trail_detail_circle_inner">
                <div className="trail_detail_white_circle"></div>
                <div className="trail_detail_circle_text">Photos</div>
              </div>
              <div className="trail_detail_circle_inner">
                <div className="trail_detail_white_circle"></div>
                <div className="trail_detail_circle_text">Share</div>
              </div>
              <div className="trail_detail_circle_inner">
                <div className="trail_detail_white_circle"></div>
                <div className="trail_detail_circle_text">More</div>
              </div>
            </div>
          </div>
          <div className="trail_detail_image_text">
            <div className="trail_detail_image_firstline">{trail?.name}</div>
            <div className="trail_detail_image_secondline">
              <div>{trail?.difficulty}</div>
              <div>review stars and total</div>
            </div>
            <div className="trail_detail_image_thirdline">{trail?.resort}</div>
          </div>
        </div>
          <div>
            <div>{trail?.description}</div>
            <div>
              <div>
                <div>Length</div>
                <div>{trail?.length} mi</div>
              </div>
              <div>
                <div>Elevation gain</div>
                <div>{trail?.elevation} ft</div>
              </div>
              <div>
                <div>Route Type</div>
                <div>{trail?.routeType}</div>
              </div>
              <div>
                <div>
                  review avg and review total
                </div>
                <div>
                    <CreateReviewModal />
                </div>
              </div>
            </div>
            <div>
                trails near me on right side
            </div>
          </div>
      </>
    );
}



export default TrailDetail