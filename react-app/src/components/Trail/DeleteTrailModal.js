import React, { useState } from "react";
import { Modal } from "../context/Modal";
import DeleteTrail from "./DeleteTrail";

import "./DeleteTrail.css";

function DeleteTrailModal({ trail }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="delete_trail_modal_button"
        onClick={() => setShowModal(true)}
      >
        <div className="my_trail_white_circle">
          <i
            style={{ color: "rgb(60, 103, 148)" }}
            className="fa-regular fa-trash-can fa-xl"
          ></i>
        </div>
        Delete
      </button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteTrail trail={trail} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default DeleteTrailModal;
