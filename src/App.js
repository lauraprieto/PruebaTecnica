import React from 'react';
import './Styles/main.scss';
import Nabvar from './Components/Header/navbar'
import Content from './Components/Body/content'

function App() {
  return (
    <div className="App">
      <Nabvar />
        <Content />
    </div>
  );
}

export default App;
