import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

import Carousel from "react-bootstrap/Carousel"

import helicopters from "../images/helicopters.jpg"
import econiva from "../images/econiva.jpg"
import cret from "../images/cret.jpg"
import lukoil from "../images/lukoil.jpg"
import rosneft from "../images/rosneft.jpg"
import rusgidro from "../images/rusgidro.jpg"
import rosteh from "../images/rosteh.jpg"
import utair from "../images/utair.png"

function Partners() {
  const data = useStaticQuery(graphql`
    query getPartnersImages {
      file(relativePath: { eq: "helicopters.jpg" }) {
        childImageSharp {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  `)

  return (
    <section id="partners" className="container">
      <h2>Партнеры</h2>
      <Carousel className="mt-5  pt-5 carousel">
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <div>
              {/* <Img
                fluid={data.file.childImageSharp.fluid}
                alt="Лого Вертолеты России"
                className="h-75 w-75 h-lg-100 w-lg-100"
              /> */}
              <img
                src={helicopters}
                alt=""
                className="h-75 w-75 h-lg-100 w-lg-100"
              />
            </div>
            <div>
              <div>
                <img
                  src={econiva}
                  alt=""
                  className="h-75 w-75 h-lg-100 w-lg-100"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  src={cret}
                  alt=""
                  className="h-75 w-75 h-lg-100 w-lg-100"
                />
              </div>
            </div>
            <div>
              <div>
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
            <div>
              <img
                src={rosneft}
                alt=""
                className="h-75 w-75 h-lg-100 w-lg-100"
              />
            </div>
            <div>
              <div>
                <img
                  src={rusgidro}
                  alt=""
                  className="h-75 w-75 h-lg-100 w-lg-100"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  src={rosteh}
                  alt=""
                  className="h-75 w-75 h-lg-100 w-lg-100"
                />
              </div>
            </div>
            <div>
              <div>
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

export default Partners
