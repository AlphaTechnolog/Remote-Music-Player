import React, { useContext } from 'react'
import { FileMusic } from 'react-bootstrap-icons';
import { globalContext } from '../context/global';
import Col from 'react-bootstrap/Col';

const File = ({ file }) => {
  const {
    actualPlayerMusic,
    setActualPlayerMusic
  } = useContext(globalContext);

  const handleFileClick = () => {
    setActualPlayerMusic(file);
  }
  
  return (
    <>
      <Col
        sm={12}
        md={4}
        lg={3}
        className="text-center my-4 hovered-element"
        onClick={handleFileClick}
      >
        <FileMusic size={48} />
        <h5 className={`text-${actualPlayerMusic === file ? 'info' : 'normal'}`}>
          {file}
        </h5>
      </Col>
    </>
  )
}

export default File
