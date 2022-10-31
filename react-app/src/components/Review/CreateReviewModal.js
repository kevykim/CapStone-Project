import React, { useState } from "react";
import { Modal } from "../context/Modal";
import CreateReview from "./CreateReview";

import "./CreateReview.css";

function CreateReviewModal({user}) {
const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="create_review_modal_button"
        onClick={() => setShowModal(true)}
      >
        Write Review
      </button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateReview user={user} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default CreateReviewModal;
