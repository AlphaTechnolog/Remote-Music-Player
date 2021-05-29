import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalContextProvider } from './context/global';

import Navbar from './components/Navbar';
import Content from './views/Content';

const App = () => {
  return (
    <Router>
      <Switch>
        <GlobalContextProvider>
          <Navbar />
          <Route path="/" exact>
            <Content />
          </Route>
        </GlobalContextProvider>
      </Switch>
    </Router>
  )
}

export default App
