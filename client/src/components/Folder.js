import React, { useContext } from 'react'
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
    <tr onClick={handleClick} style={{ cursor: "pointer" }}>
      <td><FolderIcon size={32} /></td>
      <td><h5>{dir}</h5></td>
    </tr>
  )
}

export default Folder
