import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Map from './pages/map/Map'
import PageShell from './components/PageShell'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact={true} component={PageShell(Home)}></Route>
        <Route path="/profile" exact component={PageShell(Profile)}></Route>
        <Route path="/map" exact component={PageShell(Map)}></Route>
      </div>
    );
  }
}
export default App;
