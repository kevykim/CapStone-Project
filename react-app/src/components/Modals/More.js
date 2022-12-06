
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
                "https://cms.rideboreal.com/sites/boreal/files/inline-images/Boreal%20Trail%20Map.jpg";
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
                "https://static.evo.com/content/travel-guides/tahoe/heavenly/heavenly_trailmap.jpg";
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
      ) : trail?.resort === "Mammoth Mountain" ? (
        <div className="more_modal_img_div">
          <img
            className="more_modal_heavenly_img"
            src="https://static.evo.com/content/travel-guides/ca/mammoth/mammoth_wintertrailmap_frontside.jpg"
            alt="mammoth"
            onError={(event) => {
              event.currentTarget.src =
                "https://static.evo.com/content/travel-guides/ca/mammoth/mammoth_wintertrailmap_frontside.jpg";
            }}
          />
          <div className="more_modal_moreinfo">
            <div>Check out&nbsp;</div>
            <a
              href="https://www.mammothmountain.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="more_modal_alink"
            >
              Mammoth
            </a>
            <div>&nbsp;for more info...</div>
          </div>
        </div>
      ) : trail?.resort === "Bear Mountain" ? (
        <div className="more_modal_img_div">
          <img
            className="more_modal_heavenly_img"
            src="https://static.evo.com/content/travel-guides/ca/bigbear/17_map-1.png"
            alt="bear"
            onError={(event) => {
              event.currentTarget.src =
                "https://static.evo.com/content/travel-guides/ca/bigbear/17_map-1.png";
            }}
          />
          <div className="more_modal_moreinfo">
            <div>Check out&nbsp;</div>
            <a
              href="https://www.bigbearmountainresort.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="more_modal_alink"
            >
              Bear Mountain
            </a>
            <div>&nbsp;for more info...</div>
          </div>
        </div>
      ) : trail?.resort === "Mountain High" ? (
        <div className="more_modal_img_div">
          <img
            className="more_modal_heavenly_img"
            src="https://res.cloudinary.com/liftopia/image/upload/c_fit,d_defaults:default_logo_1.png,f_auto,h_980,q_auto,w_980/v1/production/trail_maps/d05e41c2b8d2114c7a98a1a0154f38c5.jpg"
            alt="mthighr"
            onError={(event) => {
              event.currentTarget.src =
                "https://res.cloudinary.com/liftopia/image/upload/c_fit,d_defaults:default_logo_1.png,f_auto,h_980,q_auto,w_980/v1/production/trail_maps/d05e41c2b8d2114c7a98a1a0154f38c5.jpg";
            }}
          />
          <div className="more_modal_moreinfo">
            <div>Check out&nbsp;</div>
            <a
              href="https://www.mthigh.com/site"
              target="_blank"
              rel="noopener noreferrer"
              className="more_modal_alink"
            >
              Mountain High
            </a>
            <div>&nbsp;for more info...</div>
          </div>
        </div>
      ) : trail?.resort === "Mount Hood Meadows" ? (
        <div className="more_modal_img_div">
          <img
            className="more_modal_heavenly_img"
            src="https://static.evo.com/content/travel-guides/oregon/meadows_trailmap.jpg"
            alt="mthood"
            onError={(event) => {
              event.currentTarget.src =
                "https://static.evo.com/content/travel-guides/oregon/meadows_trailmap.jpg";
            }}
          />
          <div className="more_modal_moreinfo">
            <div>Check out&nbsp;</div>
            <a
              href="https://www.skihood.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="more_modal_alink"
            >
              Mount Hood Meadows
            </a>
            <div>&nbsp;for more info...</div>
          </div>
        </div>
      ) : trail?.resort === "Timberline Summit Pass" ? (
        <div className="more_modal_img_div">
          <img
            className="more_modal_heavenly_img"
            src="https://static.evo.com/content/travel-guides/oregon/timberline_trailmap.jpg"
            alt="timberline"
            onError={(event) => {
              event.currentTarget.src =
                "https://static.evo.com/content/travel-guides/oregon/timberline_trailmap.jpg";
            }}
          />
          <div className="more_modal_moreinfo">
            <div>Check out&nbsp;</div>
            <a
              href="https://www.timberlinelodge.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="more_modal_alink"
            >
              Timberline Summit Pass
            </a>
            <div>&nbsp;for more info...</div>
          </div>
        </div>
      ) : trail?.resort === "Mount Bachelor" ? (
        <div className="more_modal_img_div">
          <img
            className="more_modal_heavenly_img"
            src="https://static.evo.com/content/travel-guides/oregon/bachelor_trailmap.jpg"
            alt="bachelor"
            onError={(event) => {
              event.currentTarget.src =
                "https://static.evo.com/content/travel-guides/oregon/bachelor_trailmap.jpg";
            }}
          />
          <div className="more_modal_moreinfo">
            <div>Check out&nbsp;</div>
            <a
              href="https://www.mtbachelor.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="more_modal_alink"
            >
              Mount Bachelor
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