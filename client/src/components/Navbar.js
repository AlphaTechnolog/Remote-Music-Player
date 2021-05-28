import React, { useContext } from 'react';
import AppBar from 'react-bootstrap/Navbar'
import { globalContext } from '../context/global';

const Navbar = () => {
  const { path, fmtPath } = useContext(globalContext);

  return (
    <>
      <AppBar bg="dark" variant="dark" fixed="top">
        <AppBar.Brand href="#">
          Remote music player - {fmtPath(path)}
        </AppBar.Brand>
      </AppBar>
      <br /><br /><br />
    </>
  )
}

export default Navbar
