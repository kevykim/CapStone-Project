import React, { useState } from "react";
import { Modal } from "../context/Modal";
import Photos from "./Photos";


import './PhotosModal.css'

function PhotosModal({ trail }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="share_modal_button" onClick={() => setShowModal(true)}>
        <div className="trail_detail_white_circle">
          <i
            style={{ color: "rgb(60, 103, 148)" }}
            className="fa-solid fa-camera fa-xl"
          ></i>
        </div>
        Photos
      </button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <Photos trail={trail} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default PhotosModal;
