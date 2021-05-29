import React, { useContext, useState } from 'react';
import { globalContext } from '../context/global';
import client from '../client';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Mkdir = () => {
  const [showModal, setShowModal] = useState(false);
  const [fields, setFields] = useState({ dirName: '' });
  const { path, setLoading, setContent } = useContext(globalContext);

  const toggleShowModal = () => setShowModal(!showModal);
  const cancel = () => {
    toggleShowModal();
    setFields({ dirName: '' });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  }

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      await mkdir();
    }
  }

  const mkdir = async () => {
    await client.mkdir(path, fields.dirName);

    setLoading(true);
    setContent((await client.getContent(path)));
    setLoading(false);

    toggleShowModal();
  }

  return (
    <>
      <Button variant="primary" onClick={toggleShowModal} className="mb-1">
        Make a directory
      </Button>

      <Modal show={showModal} onHide={toggleShowModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            Make a directory.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Directory name</Form.Label>
            <Form.Control
              type="text"
              name="dirName"
              placeholder="Enter directory name"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancel}>
            Close
          </Button>

          <Button variant="primary" onClick={mkdir}>
            Make
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Mkdir
