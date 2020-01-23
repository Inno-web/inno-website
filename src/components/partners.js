import React from "react"
import Carousel from "react-bootstrap/Carousel"
import helicopters from "../images/helicopters.jpg"
import econiva from "../images/econiva.jpg"
import cret from "../images/cret.jpg"
import lukoil from "../images/lukoil.jpg"
import rosneft from "../images/rosneft.jpg"
import rusgidro from "../images/rusgidro.jpg"
import rosteh from "../images/rosteh.jpg"
import utair from "../images/utair.png"

const partners = () => {
  return (
    <section id="partners" className="container">
      <h2>Партнеры</h2>
      <Carousel className="mt-5  pt-5 carousel">
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <div className="">
              <img
                src={helicopters}
                alt=""
                className="h-75 w-75 h-lg-100 w-lg-100"
              />
            </div>
            <div>
              <div className="">
                <img
                  src={econiva}
                  alt=""
                  className="h-75 w-75 h-lg-100 w-lg-100"
                />
              </div>
            </div>
            <div>
              <div className="">
                <img
                  src={cret}
                  alt=""
                  className="h-75 w-75 h-lg-100 w-lg-100"
                />
              </div>
            </div>
            <div>
              <div className="">
                <img
                  src={lukoil}
                  alt=""
                  className="h-75 w-75 h-lg-100 w-lg-100"
                />
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <div className="">
              <img
                src={rosneft}
                alt=""
                className="h-75 w-75 h-lg-100 w-lg-100"
              />
            </div>
            <div>
              <div className="">
                <img
                  src={rusgidro}
                  alt=""
                  className="h-75 w-75 h-lg-100 w-lg-100"
                />
              </div>
            </div>
            <div>
              <div className="">
                <img
                  src={rosteh}
                  alt=""
                  className="h-75 w-75 h-lg-100 w-lg-100"
                />
              </div>
            </div>
            <div>
              <div className="">
                <img
                  src={utair}
                  alt=""
                  className="h-75 w-75 h-lg-100 w-lg-100"
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  )
}

export default partners
