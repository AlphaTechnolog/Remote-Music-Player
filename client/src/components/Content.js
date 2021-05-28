import React, { useContext } from 'react';
import { Arrow90degUp } from 'react-bootstrap-icons';
import { globalContext } from '../context/global';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner';
import Player from './Player'
import Search from './Search'
import Mkdir from './Mkdir'
import UploadMusic from './UploadMusic'
import Folder from './Folder'
import File from './File'

const Content = () => {
  const {
    loading,
    content,
    fmtPath,
    path,
    setPath,
    showPlayer
  } = useContext(globalContext);

  const goToBack = () => {
    if (path !== "") {
      let newPath = path.split('!');
      newPath.pop();
      setPath(newPath.join('!'));
    }
  }

  return (
    <>
      {showPlayer && (
        <Player />
      )}

      <Row>
        <Col className="my-2 mx-2">
          <h3>Content of {fmtPath(path)}</h3>
        </Col>
        <Col style={{ textAlign: "right" }} className="my-2 mx-2">
          <Mkdir />

          &nbsp;

          <UploadMusic />
        </Col>
      </Row>

      <Search />

      {loading ? (
        <Spinner animation="border">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <table className="table">
          <tbody>
            <tr
              onClick={goToBack}
              style={{ cursor: path === "" ? "normal" : "pointer" }}
            >
              <td><Arrow90degUp size={32} /></td>
              <td><h5>..</h5></td>
            </tr>
            {content.directories.length === 0 && content.files.length === 0 ? (
              <tr>
                <td />
                <td>Don't have content to show</td>
              </tr>
            ) : (
              <>
                {content.directories.map((dir, idx) => (
                  <Folder
                    key={idx}
                    dir={dir}
                  />
                ))}

                {content.files.map((file, idx) => (
                  <File
                    key={idx}
                    file={file}
                  />
                ))}
              </>
            )}
          </tbody>
        </table>
      )}
    </>
  )
}

export default Content;
