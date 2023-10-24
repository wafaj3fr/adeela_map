import React, { useState } from 'react';
import ImageWithButton from './ImageWithButton';
import './App.scss';

function App() {
  const [modal, setModal] = useState(false);
  const [carouselModal, setCarouselModal] = useState(false);

  const carouselz = () => {
    setCarouselModal(!carouselModal);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="app-container">
      <button onClick={toggleModal} className="btn-modal x">
        2019
      </button>

      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content x">
            <div className="image-with-button">
              <img src={require('./sd-02.png')} alt="" />
              <button
                className='btnx round-button'
                onClick={carouselz}
              >
                Click me!
              </button>
            </div>
          </div>
        </div>
      )}

      {carouselModal && (
        <div className="carouselModal" style={{ zIndex: 2 }}>
          <div className="overlay" onClick={carouselz}></div>
          <div className="modal-content x">
            <div className="image-with-button">
              <button onClick={carouselz}>Close</button>
            </div>
          </div>
        </div>
      )}

      <button onClick={toggleModal} className="btn-modal y">
        2020
      </button>

      {modal && (
        <div className="modal" style={{ zIndex: 1 }}>
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content y">
            <ImageWithButton
              className='imgy'
              imageSrc={require('./sd-02.png')}
              buttonText="Click me!"
              onClick={carouselz}
            />
          </div>
        </div>
      )}

      <button onClick={toggleModal} className="btn-modal z">
        2021
      </button>

      {modal && (
        <div className="modal" style={{ zIndex: 1 }}>
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content z">
            <ImageWithButton
              className='imgz'
              imageSrc={require('./sd-02.png')}
              onClick={carouselz}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
