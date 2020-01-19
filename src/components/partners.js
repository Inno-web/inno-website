import React from "react"
import Carousel from "react-bootstrap/Carousel"
import helicopters from "../images/helicopters.jpg"
import econiva from "../images/econiva.jpg"
import cret from "../images/cret.jpg"
import lukoil from "../images/lukoil.jpg"
import rosneft from "../images/rosneft.jpg"
import rusgidro from "../images/rusgidro.jpg"
import rosteh from "../images/rosteh.jpg"

const partners = () => {
  return (
    <section id="charity" className="container">
      <h2>Партнеры</h2>
      <Carousel className="mt-5">
        <Carousel.Item>
          <div className="d-flex justify-content-between">
            <div>
              <img src={helicopters} alt="" className="charity-img" />
            </div>
            <div>
              <div>
                <img src={econiva} alt="" className="charity-img" />
              </div>
            </div>
            <div>
              <div>
                <img src={cret} alt="" className="charity-img" />
              </div>
            </div>
            <div>
              <div>
                <img src={lukoil} alt="" className="charity-img" />
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-flex justify-content-between">
            <div>
              <img src={rosneft} alt="" className="charity-img" />
            </div>
            <div>
              <div>
                <img src={rusgidro} alt="" className="charity-img" />
              </div>
            </div>
            <div>
              <div>
                <img src={rosteh} alt="" className="charity-img" />
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  )
}

export default partners
