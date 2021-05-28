import React from 'react';
import { GlobalContextProvider } from './context/global';

import Navbar from './components/Navbar';
import Content from './components/Content';

const App = () => {
  return (
    <GlobalContextProvider>
      <Navbar />
      <Content />
    </GlobalContextProvider>
  )
}

export default App
