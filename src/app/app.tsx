import { FunctionalComponent } from '@/components/functional/functional';
import ClassComponent from '@/components/class/class';
import React from 'react';
import './app.scss';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomeComponent } from '@/components/home/home';

const App = () => {
  return (
    <Router>
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/classComponent">Class Component</Link>
            </li>
            <li>
              <Link to="/functionalComponent">Functional Component</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path="/about">
          <ClassComponent increment={15} />
        </Route>
        <Route path="/functionalComponent">
          <FunctionalComponent increment={3} />
        </Route>
        <Route path="/">
          <HomeComponent />
        </Route>
      </Switch>

        
    </div>
    </Router>
  );
}

export default App;