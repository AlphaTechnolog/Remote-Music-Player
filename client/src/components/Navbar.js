import React, { useEffect, useState, useContext } from 'react';
import client from '../client';
import AppBar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form'
import { globalContext } from '../context/global';

const Navbar = () => {
  const [search, setSearch] = useState('');  

  const {
    path,
    setContent,
    setLoading
  } = useContext(globalContext);
  
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    (async () => {
      setLoading(true);
      if (search === '') {
        setContent((await client.getContent(path)));
      } else {
        try {
          setContent({
            directories: (await client.getContent(path)).directories.filter((dirent) => (
              new RegExp(search, 'g').test(dirent)
            )),
            files: (await client.getContent(path)).files.filter((file) => (
              new RegExp(search, 'g').test(file)
            )),
          });
        } catch (err) {
          console.error(err.message);
        }
      }
      setLoading(false);
    })();
    // eslint-disable-next-line
  }, [search]);

  return (
    <>
      <AppBar bg="dark" variant="dark" fixed="top">
        <AppBar.Collapse id="nav-links">
          <AppBar.Brand href="/">
            {document.title}
          </AppBar.Brand>
          <Nav className="mr-auto" />
          <Form inline>
            <Form.Control
              type="text"
              placeholder="Search music (Regular expression)"
              className="mr-sm-2"
              onChange={handleSearchChange}
            />
          </Form>
        </AppBar.Collapse>
      </AppBar>
      <br /><br /><br /><br />
    </>
  )
}

export default Navbar
