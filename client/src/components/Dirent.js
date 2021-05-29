import React, { useContext } from 'react';
import { globalContext } from '../context/global';
import { Arrow90degUp } from 'react-bootstrap-icons';
import Col from 'react-bootstrap/Col';

const Dirent = () => {
  const { path, setPath } = useContext(globalContext);  

  const goToBack = () => {
    if (path !== "") {
      let newPath = path.split('!');
      newPath.pop();
      setPath(newPath.join('!'));
    }
  }

  return (
    <Col
      sm={6}
      md={4}
      lg={3}
      className={`${path === '' ? '' : 'hovered-element'} text-center my-4`}
      onClick={goToBack}
    >
      <Arrow90degUp size={48} />
      <h5>..</h5>
    </Col>
  )
}

export default Dirent;
