import React, { Component } from 'react';
import { useState, useEffect } from "react"
import MainContainer from './containers/MainContainer';
import SideContainer from './containers/SideContainer';
import Modal from './components/Modal'

import './stylesheets/style.css';
const App = () => {

  const [showModal, setShowModal] = useState(false);
  
  console.log('in app.jsx');
  return (
    
    
    <div id="app">
      <SideContainer setShowModal={setShowModal}/>
      <MainContainer />
      {showModal && (
        <Modal
          onCloseButtonClick={() => {setShowModal(false);}}
        />
      )}
      
    </div>
  );
};

export default App;