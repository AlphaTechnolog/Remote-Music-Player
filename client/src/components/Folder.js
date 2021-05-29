import React, { useContext } from 'react'
import Col from 'react-bootstrap/Col';
import { globalContext } from '../context/global';
import { Folder as FolderIcon } from 'react-bootstrap-icons';

const Folder = ({ dir }) => {
  const { path, setPath } = useContext(globalContext);

  const handleClick = () => {
    if (path === '') {
      setPath(`/${dir}`);
    } else {
      setPath(`${path}!${dir}`);
    }
  }

  return (
    <Col
      sm={12}
      md={4}
      lg={3}
      className="text-center my-4 hovered-element"
      onClick={handleClick}
    >
      <FolderIcon size={48} />
      <h5>{dir}</h5>
    </Col>
  )
}

export default Folder
