import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import client from '../client'
import { globalContext } from '../context/global'

const UploadMusic = () => {
  const [showModal, setShowModal] = useState(false);
  const [files, setFiles] = useState([]);
  const { path, setLoading, setContent } = useContext(globalContext);

  const toggleShowModal = () => setShowModal(!showModal);
  const handleFilesChange = (e) => setFiles(e.target.files);
  const save = async () => {
    toggleShowModal();
    setLoading(true);
    await client.uploadMusics(path, files);
    setContent((await client.getContent(path)));
    setLoading(false);
  }

  return (
    <>
      <Button variant="success" onClick={toggleShowModal} className="mb-1">
        Upload music
      </Button>

      <Modal show={showModal} onHide={toggleShowModal}>
        <Modal.Header closeButton>
          <Modal.Title>Upload music</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="musics">
            <Form.Label>Select the files</Form.Label>
            <Form.File
              multiple
              onChange={handleFilesChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleShowModal}>
            Close
          </Button>

          <Button variant="primary" onClick={save}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UploadMusic
