import React from "react"

import Cogs from "../images/cogs.png"
import Form from "../images/form.png"
import Chart from "../images/chart.png"
import { FaCogs, FaChartBar, FaFileContract } from "react-icons/fa"

const benefits = () => {
  return (
    <section id="benefits">
      <div className="container d-flex flex-column  flex-lg-row justify-content-lg-between align-items-center">
        <div className="benefit d-flex flex-column  flex-lg-row align-items-center">
          <div>
            <FaCogs style={{ width: "80px", height: "80px" }} />
          </div>
          <div className="ml-xs-1 ml-sm-3 mt-xs-3 mt-md-0">
            <p className="text-center text-lg-left">
              Многократный опыт внедрения оборудования в существующие
              технические процессы производств
            </p>
          </div>
        </div>
        <div className="benefit d-flex flex-column  flex-lg-row align-items-center">
          <div>
            <FaChartBar style={{ width: "80px", height: "80px" }} />
          </div>
          <div className="ml-xs-1 ml-sm-3 mt-xs-3 mt-md-0">
            <p className="text-center text-lg-left ">
              Постоянно растущее число успешно выполненных проектов
            </p>
          </div>
        </div>
        <div className="benefit d-flex flex-column  flex-lg-row align-items-center">
          <div>
            <FaFileContract style={{ width: "80px", height: "80px" }} />
          </div>
          <div className="ml-xs-0 ml-sm-3 mt-xs-3 mt-md-0">
            <p className="text-center text-lg-left ">
              Подбор оборудования в проектируемых и вновь возводимых объектах
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default benefits
