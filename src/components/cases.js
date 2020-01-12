import React from 'react';
import { Card, Button, Link } from 'react-bootstrap'
import CasesPlaceholder from '../images/cases-placeholder.jpg'

const cases = () => {
  return (
    <section id="cases" className="container">
      <h2>Кейсы</h2>
        <div className="row f-flex flex-wrap">
          <div className="col-lg-4 col-md-6 col-12 d-flex align-items-stretch justify-content-center">
            <Card className="case-card shadow-sm mt-3 mt-md-5 d-flex flex-column align-items-center justify-content-between">
              <Card.Img
                variant="top"
                src={CasesPlaceholder}
                className="case-img p-1 w-sm-25 "
                alt="'Фильтрация-Сепарация жидкости и газа"
              />
              <Card.Body
                className="d-flex flex-column align-items-start justify-content-between w-100 text-uppercase">

                <Card.Title>Название проекта</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Краткое описание</Card.Subtitle>
                <Button variant="outline-secondary" className="secondary-button  align-self-end">
                  Подробнее
                  <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-flex align-items-stretch justify-content-center">
            <Card className="case-card shadow-sm mt-3 mt-md-5 d-flex flex-column align-items-center justify-content-between">
              <Card.Img
                variant="top"
                src={CasesPlaceholder}
                className="case-img p-1 w-sm-25 "
                alt="'Фильтрация-Сепарация жидкости и газа"
              />
              <Card.Body
                className="d-flex flex-column align-items-start justify-content-between w-100 text-uppercase">

                <Card.Title>Название проекта</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Краткое описание</Card.Subtitle>
                <Button variant="outline-secondary" className="secondary-button  align-self-end">
                  Подробнее
                  <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-flex align-items-stretch justify-content-center">
            <Card className="case-card shadow-sm mt-3 mt-md-5 d-flex flex-column align-items-center justify-content-between">
              <Card.Img
                variant="top"
                src={CasesPlaceholder}
                className="case-img p-1 w-sm-25 "
                alt="'Фильтрация-Сепарация жидкости и газа"
              />
              <Card.Body
                className="d-flex flex-column align-items-start justify-content-between w-100 text-uppercase">

                <Card.Title>Название проекта</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Краткое описание</Card.Subtitle>
                <Button variant="outline-secondary" className="secondary-button  align-self-end">
                  Подробнее
                  <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
              </Card.Body>
            </Card>
          </div>
      </div>
    </section>
  );
};

export default cases;