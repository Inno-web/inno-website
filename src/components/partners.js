import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Helicopters from '../images/helicopters.png'

const partners = () => {
  return (
    <section id="charity" className="container">
      <h2>Партнеры</h2>
      <Carousel>
        <Carousel.Item>
          <div className="d-flex justify-content-between">
            <div>
              <img src={Helicopters} className="charity-img" />
            </div>
            <div>
              <div>
                <img src={Helicopters} className="charity-img" />
              </div>
            </div>
            <div>
              <div>
                <img src={Helicopters} className="charity-img" />
              </div>
            </div>
            <div>
              <div>
                <img src={Helicopters} className="charity-img" />
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-flex justify-content-between">
            <div>
              <img src={Helicopters} className="charity-img" />
            </div>
            <div>
              <div>
                <img src={Helicopters} className="charity-img" />
              </div>
            </div>
            <div>
              <div>
                <img src={Helicopters} className="charity-img" />
              </div>
            </div>
            <div>
              <div>
                <img src={Helicopters} className="charity-img" />
              </div>
            </div>
          </div>
        </Carousel.Item>

      </Carousel>
    </section>
  );
};

export default partners;