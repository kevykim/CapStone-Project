import React, { useState } from "react";
import { Modal } from "../context/Modal";
import Share from "./Share";

import "./ShareModal.css";

function ShareModal({ trail }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="photo_modal_button" onClick={() => setShowModal(true)}>
        <div className="trail_detail_white_circle">
          <i
            style={{ color: "rgb(60, 103, 148)" }}
            className="fa-solid fa-arrow-up-from-bracket fa-xl"
          ></i>
        </div>
        Share
      </button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <Share trail={trail} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default ShareModal;
