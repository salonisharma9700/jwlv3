// SubmittingModal.js
import React from 'react';
import Modal from 'react-bootstrap/Modal';

const SubmittingModal = ({ show }) => {
  return (
    <Modal show={show} onHide={() => {}}>
      <Modal.Header closeButton>
        <Modal.Title>Submitting Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Submitting...</p>
      </Modal.Body>
    </Modal>
  );
};

export default SubmittingModal;
