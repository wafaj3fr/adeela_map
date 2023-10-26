import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.scss';
import ActiveMap from './map';
import ActiveMapTwo from './map20';
import ActiveMapThree from './map21';

function App() {
  const [modal, setModal] = useState(false);

  const [modalTwo, setModalTwo] = useState(false);
  const [modalThree, setModalThree] = useState(false);

  const toggleModalOne = () => {
    setModal(!modal);
  };

  const toggleModalTwo = () => {
    setModalTwo(!modalTwo);
  };

  const toggleModalThree = () => {
    setModalThree(!modalThree);
  };


  return (
    <div className="app-container">
      <button onClick={toggleModalOne} className="btn-modal x">
        2019
      </button>

      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModalOne}></div>
          <div className="modal-content x">
            <div className="modal-carousel">
              <ActiveMap />
              
            </div>
          </div>
     
        </div>
        
      )}

      <button onClick={toggleModalTwo} className="btn-modal y">
        2020
      </button>

      {modalTwo && (
        <div className="modal">
          <div className="overlay" onClick={toggleModalTwo}></div>
          <div className="modal-content y">
            <div className="modal-carousel">
                <ActiveMapTwo />
                
              </div>
          </div>
        </div>
      )}

      <button onClick={toggleModalThree} className="btn-modal z">
        2021
      </button>

      {modalThree && (
        <div className="modal">
          <div className="overlay" onClick={toggleModalThree}></div>
          <div className="modal-content z">
            <div className="modal-carousel">
                <ActiveMapThree />
                
              </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
