import React from 'react';

import Cogs from "../images/cogs.png"
import Form from "../images/form.png"
import Chart from "../images/chart.png"


const benefits = () => {
  return (
    <section id="benefits">
      <div className="container flex-container">
        <div className="benefit">
          <img src={Cogs}></img>
          <p>Многократный опыт внедрения оборудования в существующие технические процессы производств</p>
        </div>
        <div className="benefit">
          <img src={Chart}></img>
          <p>Постоянно растущее число успешно выполненных проектов</p>
        </div>
        <div className="benefit">
          <img src={Form}></img>
          <p>Подбор оборудования в проектируемых и вновь возводимых объектах</p>
        </div>
      </div>
    </section>
  );
};

export default benefits;