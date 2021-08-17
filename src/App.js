import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Calculator from './components/Calculator/Calculator';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/calculator" component={Calculator} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
