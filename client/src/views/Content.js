import React, { useContext } from 'react';
import { globalContext } from '../context/global';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner';
import Dirent from '../components/Dirent';
import Player from '../components/Player'
import Mkdir from '../components/Mkdir'
import UploadMusic from '../components/UploadMusic'
import Folder from '../components/Folder'
import File from '../components/File'

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
