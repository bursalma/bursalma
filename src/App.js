import React from 'react';
import './App.css';

import Home from './pages/Home/Home';
// import Header from './components/Header/Header';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <div id='begin' />
        <Home />
      </div>
    );
  }
}

export default App;