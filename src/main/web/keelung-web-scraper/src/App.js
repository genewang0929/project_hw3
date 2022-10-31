import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Region from "./page/Region";
import Info from "./page/Info";
import Search from './page/Search';
import Index from './page/Index';

function App() {

  return (
      <Router>
          <div>
              <Switch>
                  <Route exact path='/' component={Index} />
                  <Route exact path='/search' component={Search} />
                  <Route exact path='/region' component={Region} />
                  <Route exact path='/region/:region' component={Info} />
              </Switch>

          </div>
      </Router>
  );
}

export default App;
