import React from 'react';
import { Button, Container } from 'react-bootstrap';

const questionnarie = () => {
  return (
    <section id="questionnarie" className="d-flex  align-items-center">
      <div className="
      container 
      d-flex  
      flex-lg-row
      justify-content-lg-between 
      flex-column">
        <div className="align-self-sm-center">
          <h2 className="text-uppercase">Заполните опросный лист</h2>
        </div>
        <div className="d-flex flex-grow-1  justify-content-center">
          <Button variant="light" className="secondary-button mx-3" style={{width: "170px"}}>Скачать</Button>
          <Button variant="light" className="secondary-button mx-3" style={{width: "170px"}}>Заполнить</Button>
        </div>
      </div>
    </section>
  );
};

export default questionnarie;