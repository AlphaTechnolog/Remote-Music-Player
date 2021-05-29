import React, { useContext } from 'react';
import { globalContext } from '../context/global';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner';
import Dirent from './Dirent';
import Player from './Player'
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
    showPlayer
  } = useContext(globalContext);

  return (
    <>
      <Container>
        <Row>
          <Col className="my-2">
            <h3>Content of {fmtPath(path)}</h3>
          </Col>
          <Col style={{ textAlign: "right" }} className="my-2">
            <Mkdir />
            &nbsp;
            <UploadMusic />
          </Col>
        </Row>
    
        <hr />

        {loading ? (
          <Spinner animation="border">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <Row>
            <Dirent />
            {content.directories.length === 0 && content.files.length === 0 ? (
              ''
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
          </Row>
        )}
      </Container>
      {showPlayer && (
        <Player />
      )}
    </>
  )
}

export default Content;
