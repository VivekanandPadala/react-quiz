import React, { Component, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

const ItemModal = () => {
  const [mod, setMod] = useState(false);
  const toggleMod = () => setMod(!mod);
  return (
    <div>
      <Button color='dark' style={{ marginBottom: '2rem' }} onClick={toggleMod}>
        Start
      </Button>
      <Modal isOpen={mod} toggle={toggleMod}>
        <ModalHeader toggle={toggleMod}>Add to list</ModalHeader>
        <ModalBody>
          <p>hi</p>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ItemModal;
