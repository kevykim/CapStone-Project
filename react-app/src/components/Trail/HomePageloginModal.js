import React, { useState } from "react";
import { Modal } from "../context/Modal";
import { NavLink } from "react-router-dom";


import "./HomePage";

function HomePageloginModal({ user }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="homepage_modal_button"
        onClick={() => setShowModal(true)}
      >
        My trails
      </button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="homepage_modal_notlogged_main">
            <button className="homepage_modal_cancel_button" onClick={() => setShowModal(false)}>
              x
            </button>
            <div className="homepage_modal_notlogged">
              You must log in to see your trails...
            </div>
            <NavLink
              className="homepage_modal_notlogged_navlink"
              exact
              to="/login"
            >
              Log in
            </NavLink>
          </div>
        </Modal>
      )}
    </>
  );
}

export default HomePageloginModal;
