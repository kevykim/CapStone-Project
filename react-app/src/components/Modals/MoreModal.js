import React, { useState } from "react";
import { Modal } from "../context/Modal";
import More from "./More";

import "./MoreModal.css";

function MoreModal({ trail }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="more_modal_button" onClick={() => setShowModal(true)}>
        <div className="trail_detail_white_circle">
          <i
            style={{ color: "rgb(60, 103, 148)" }}
            className="fa-solid fa-circle-info fa-xl"
          ></i>
        </div>
        More
      </button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <More trail={trail} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default MoreModal;
