import React from "react"

import Cogs from "../images/cogs.png"
import Form from "../images/form.png"
import Chart from "../images/chart.png"

const benefits = () => {
  return (
    <section id="benefits">
      <div className="container d-flex flex-column  flex-lg-row justify-content-lg-between align-items-center">
        <div className="benefit d-flex flex-column  flex-lg-row align-items-center">
          <img src={Cogs} alt=""></img>
          <p className="text-center text-lg-left">
            Многократный опыт внедрения оборудования в существующие технические
            процессы производств
          </p>
        </div>
        <div className="benefit d-flex flex-column  flex-lg-row align-items-center">
          <img src={Chart} alt=""></img>
          <p className="text-center text-lg-left">
            Постоянно растущее число успешно выполненных проектов
          </p>
        </div>
        <div className="benefit d-flex flex-column  flex-lg-row align-items-center">
          <img src={Form} alt=""></img>
          <p className="text-center text-lg-left">
            Подбор оборудования в проектируемых и вновь возводимых объектах
          </p>
        </div>
      </div>
    </section>
  )
}

export default benefits
