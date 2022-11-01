import React, { useState } from "react";
import { Modal } from "../context/Modal";
import Photos from "./Photos";


import './PhotosModal.css'

function PhotosModal({ trail }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="photo_modal_button"
        onClick={() => setShowModal(true)}
      >
        Photos
      </button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <Photos trail={trail} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default PhotosModal;
