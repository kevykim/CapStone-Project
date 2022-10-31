import React, { useState } from "react";
import { Modal } from "../context/Modal";
import DeleteReview from "./DeleteReview";

import "./DeleteReview.css";

function DeleteReviewModal({ review }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="delete_review_modal_button"
        onClick={() => setShowModal(true)}
      >
        Delete
      </button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteReview review={review} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default DeleteReviewModal;
