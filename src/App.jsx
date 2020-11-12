import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import StudentList from './components/StudentList';
import NavBar from './components/NavBar';
import StudentItem from './components/StudentItem';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/students">
            <StudentList />
          </Route>
          <Route exact path="/students/:idStudent" component={StudentItem} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
