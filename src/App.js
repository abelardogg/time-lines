import React from 'react';
import Timeline from './components/time-line/Timeline'
import Navigator from './components/Navigator';
import About from './components/About'
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigator />
        <Container fluid={true}>
          <Route path="/" exact component={Timeline} />
          <Route path="/about" component={About} />
        </Container>
      </div>
    </Router>

  );
}

export default App;
