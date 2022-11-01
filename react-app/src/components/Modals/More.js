
import './MoreModal.css'



function More({trail, setShowModal}){

      const closeModal = (event) => {
        setShowModal(false);
      };

return (
  <>
    <div className="more_modal_cancel_div">
      <button className="more_modal_cancel_button" onClick={closeModal}>
        x
      </button>
    </div>
    <div className="more_modal_main_div">
      <div className="more_modal_text">Resort Map</div>
      {trail?.resort === "Boreal Mountain Resort" ? (
        <div className="more_modal_img_div">
          <img
            className="more_modal_boreal_img"
            src="https://cms.rideboreal.com/sites/boreal/files/inline-images/Boreal%20Trail%20Map.jpg"
            alt="boreal"
            onError={(event) => {
              event.currentTarget.src =
                "https://cms.rideboreal.com/sites/boreal/files/inline-images/Boreal%20Trail%20Map.jpg"
            }}
          ></img>
          <div className="more_modal_moreinfo">
            <div>Check out&nbsp;</div>
            <a
              href="https://www.rideboreal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="more_modal_alink"
            >
              Boreal
            </a>
            <div>&nbsp;for more info...</div>
          </div>
        </div>
      ) : trail?.resort === "Heavenly Lake Tahoe" ? (
        <div className="more_modal_img_div">
          <img
            className="more_modal_heavenly_img"
            src="https://static.evo.com/content/travel-guides/tahoe/heavenly/heavenly_trailmap.jpg"
            alt="heavenly"
            onError={(event) => {
              event.currentTarget.src =
                "https://static.evo.com/content/travel-guides/tahoe/heavenly/heavenly_trailmap.jpg"
            }}
          />
          <div className="more_modal_moreinfo">
            <div>Check out&nbsp;</div>
            <a
              href="https://www.skiheavenly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="more_modal_alink"
            >
              Heavenly
            </a>
            <div>&nbsp;for more info...</div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  </>
);
}



export default More