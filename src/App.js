import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/NavBar/Banner/Banner';
import RowPost from './Components/NavBar/RowPost/RowPost';
import { action,originals } from './urls';
function App() {
  return (
    <div className="App" >
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall={true}/>
    </div>
  );
}

export default App;
