import React from "react"
import Habensky from "../images/habensky-charity.png"
import Line from "../images/line-charity.png"
import Rusfund from "../images/rusfund-charity.png"

const charity = () => {
  return (
    <section id="charity" className="container">
      <h2>Благотворительность</h2>
      <div className="d-flex justify-content-between align-items-center  mt-5 ">
        <div className="">
          <a href="https://rusfond.ru/">
            <img
              src={Rusfund}
              alt=""
              className="charity-img h-75 w-75 h-lg-100 w-lg-100"
            />
          </a>
        </div>
        <div>
          <div className="">
            <a href="https://bfkh.ru/">
              <img
                src={Habensky}
                alt=""
                className="charity-img h-75 w-75 h-lg-100 w-lg-100"
              />
            </a>
          </div>
        </div>
        <div>
          <div className="">
            <a href="https://www.life-line.ru/">
              <img
                src={Line}
                alt=""
                className="charity-img h-75 w-75 h-lg-100 w-lg-100"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default charity
