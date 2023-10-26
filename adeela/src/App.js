import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.scss';
import ActiveMap from './map';

function App() {
  const [modal, setModal] = useState(false);

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
            <div className="modal-carousel">
              <ActiveMap />
              

        {/* {carouselModal && (
        <div className="carouselModal">
          <div className="overlay" onClick={closeCarousel}></div>
          <div className="modal-content x">
            <h2>
              Carousel
            </h2>
            <div className="image-with-button">
              <button onClick={closeCarousel}>Close</button>
              <Carousel showThumbs={false}>
                <div>
               
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      )} */}
            </div>
          </div>
          {/* <div>
                <button onClick={toggleModal}>
                  X
                </button>
          </div> */}
        </div>
        
      )}

      {/* <button onClick={toggleModal} className="btn-modal y">
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
              onClick={closeCarousel}
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
              onClick={closeCarousel}
            />
          </div>
        </div>
      )} */}
    </div>
  );
}

export default App;
