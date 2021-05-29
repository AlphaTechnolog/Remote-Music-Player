import React, { useContext } from 'react'
import { FileMusic } from 'react-bootstrap-icons';
import { globalContext } from '../context/global';
import Button from 'react-bootstrap/Button';

const File = ({ file }) => {
  const {
    actualPlayerMusic,
    setActualPlayerMusic
  } = useContext(globalContext);

  const handleFileClick = () => {
    setActualPlayerMusic(file);
  }
  
  const cancelActualPlayerMusic = () => {
    const MUSIC_CANCELATION_TEXT = '';
    setActualPlayerMusic(MUSIC_CANCELATION_TEXT);
  }

  return (
    <tr>
      <td><FileMusic size={32} /></td>
      <td onClick={handleFileClick} style={{ cursor: 'pointer' }}>
        <h5 className={`text-${actualPlayerMusic === file ? 'info' : 'normal'}`}>
          {file}
        </h5>
      </td>
      {actualPlayerMusic === file && (
        <td className="mb-2">
          <Button variant="danger" onClick={cancelActualPlayerMusic}>
            Stop
          </Button>
        </td>
      )}
    </tr>
  )
}

export default File
