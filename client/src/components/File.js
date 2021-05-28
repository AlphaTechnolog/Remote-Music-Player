import React, { useContext } from 'react'
import { FileMusic } from 'react-bootstrap-icons';
import { globalContext } from '../context/global';

const File = ({ file }) => {
  const {
    actualPlayerMusic,
    setActualPlayerMusic
  } = useContext(globalContext);

  const handleFileClick = () => {
    setActualPlayerMusic(file);
  }

  return (
    <tr onClick={handleFileClick} style={{ cursor: "pointer" }}>
      <td><FileMusic size={32} /></td>
      <td>
        <h5
          className={
            `text-${actualPlayerMusic === file ? 'info' : 'normal'}`
          }
        >
          {file}
        </h5>
      </td>
    </tr>
  )
}

export default File
