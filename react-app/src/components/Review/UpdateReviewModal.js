import React, { useState } from "react";
import { Modal } from "../context/Modal";
import UpdateReview from "./UpdateReview";

import "./UpdateReview.css";

function UpdateReviewModal({review}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="update_review_modal_button"
        onClick={() => setShowModal(true)}
      >
        Edit
      </button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UpdateReview review={review} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default UpdateReviewModal;
