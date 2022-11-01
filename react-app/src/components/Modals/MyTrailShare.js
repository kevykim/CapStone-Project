
import "./ShareModal.css"


function MyTrailShare({trail, setShowModal}) {

      const closeModal = (event) => {
        setShowModal(false);
      };

    return (
      <>
        <div className="share_modal_cancel_div">
          <button className="share_modal_cancel_button" onClick={closeModal}>
            x
          </button>
          <div className="share_modal_text">Share</div>
          <div className="share_modal_inner">
            <div className="share_modal_link_div">
              <i className="fa-solid fa-link"></i>
              <div className="share_modal_link">
                &nbsp;
                {`https://winter-trails-capstone.herokuapp.com/trails/${trail?.id}`}
              </div>
            </div>
            <div>
              For more info&nbsp;
              <a
                className="share_modal_alink"
                href="https://github.com/kevykim/CapStone-Project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-square-github"></i>
                Github
              </a>
            </div>
          </div>
        </div>
      </>
    );
}


export default MyTrailShare