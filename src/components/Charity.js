import React from "react"
import Habensky from "../images/habensky-charity.png"
import Line from "../images/line-charity.png"
import Rusfund from "../images/rusfund-charity.png"

const charity = () => {
  return (
    <section id="charity" className="container">
      <h2>Благотворительность</h2>
      <div className="d-flex justify-content-between mt-5">
        <div className="">
          <img
            src={Rusfund}
            alt=""
            className="charity-img h-75 w-75 h-lg-100 w-lg-100"
          />
        </div>
        <div>
          <div className="">
            <img
              src={Habensky}
              alt=""
              className="charity-img h-75 w-75 h-lg-100 w-lg-100"
            />
          </div>
        </div>
        <div>
          <div className="">
            <img
              src={Line}
              alt=""
              className="charity-img h-75 w-75 h-lg-100 w-lg-100"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default charity
