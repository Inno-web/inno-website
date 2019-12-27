import React from 'react';

import {Card, Button} from 'react-bootstrap'
import Filtration from '../images/filtration.jpg'
import Lab from '../images/laboratory-equipment.jpg'


const items = () => {
  return (
    <section className="container" id="items">
      <h2>Типы оборудования</h2>
      <div className="row">
        <div className="col-lg-3 col-6 d-flex align-items-stretch" >
          <Card className="item-card shadow-sm mt-3 mt-md-5 d-flex flex-column align-items-center justify-content-between">
            <Card.Img 
              variant="top" 
              src={Filtration}
              className="item-img embed-responsive mt-3 w-sm-25 "
              alt="'Фильтрация-Сепарация жидкости и газа"
            />
            <Card.Body 
            className="d-flex flex-column align-items-center justify-content-between">
              
              <Card.Text className="text-center">
                Фильтрация-Сепарация жидкости и газа
              </Card.Text>
              <Button variant="dark" className="primary-button w-75">Подробнее</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 col-6 d-flex align-items-stretch" >
          <Card className="item-card shadow-sm mt-3 mt-md-5 d-flex flex-column align-items-center justify-content-between">
            <Card.Img
              variant="top"
              src={Filtration}
              className="item-img embed-responsive mt-3 "
              alt="'Фильтрация-Сепарация жидкости и газа"
            />
            <Card.Body
              className="d-flex flex-column align-items-center justify-content-between">

              <Card.Text className="text-center">
                Фильтрация-Сепарация жидкости и газа
              </Card.Text>
              <Button variant="dark" className="primary-button w-75">Подробнее</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 col-6 d-flex align-items-stretch" >
          <Card className="item-card shadow-sm mt-3 mt-md-5 d-flex flex-column align-items-center justify-content-between">
            <Card.Img
              variant="top"
              src={Filtration}
              className="item-img embed-responsive mt-3"
              alt="Теплообменное оборудование"
            />
            <Card.Body
              className="d-flex flex-column align-items-center justify-content-between">

              <Card.Text className="text-center">
                Теплообменное оборудование
              </Card.Text>
              <Button variant="dark" className="primary-button w-75">Подробнее</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 col-6 d-flex align-items-stretch" >
          <Card className="item-card shadow-sm mt-3 mt-md-5 d-flex flex-column align-items-center justify-content-between">
            <Card.Img
              variant="top"
              src={Filtration}
              className="item-img embed-responsive mt-3"
              alt="Аспирационное оборудование"
            />
            <Card.Body
              className="d-flex flex-column align-items-center justify-content-between">

              <Card.Text className="text-center">
                Аспирационное оборудование
              </Card.Text>
              <Button variant="dark" className="primary-button w-75">Подробнее</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-6 d-flex align-items-stretch" >
          <Card className="item-card shadow-sm mt-3 mt-md-5 d-flex flex-column align-items-center justify-content-between">
            <Card.Img
              variant="top"
              src={Filtration}
              className="item-img embed-responsive mt-3"
              alt="Приточно-вытяжное климатическое оборудование"
            />
            <Card.Body
              className="d-flex flex-column align-items-center justify-content-between">

              <Card.Text className="text-center">
                Приточно-вытяжное климатическое оборудование
              </Card.Text>
              <Button variant="dark" className="primary-button w-75">Подробнее</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 col-6 d-flex align-items-stretch" >
          <Card className="item-card shadow-sm mt-3 mt-md-5 d-flex flex-column align-items-center justify-content-between">
            <Card.Img
              variant="top"
              src={Filtration}
              className="item-img embed-responsive mt-3"
              alt="Оборудование для аэропортов"
            />
            <Card.Body
              className="d-flex flex-column align-items-center justify-content-between">

              <Card.Text className="text-center">
                Оборудование для аэропортов
              </Card.Text>
              <Button variant="dark" className="primary-button w-75">Подробнее</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 col-6 d-flex align-items-stretch" >
          <Card className="item-card shadow-sm mt-3 mt-md-5 d-flex flex-column align-items-center justify-content-between">
            <Card.Img
              variant="top"
              src={Filtration}
              className="item-img embed-responsive mt-3"
              alt="IT-решения ПО и оборудование"
            />
            <Card.Body
              className="d-flex flex-column align-items-center justify-content-between">

              <Card.Text className="text-center">
                IT-решения ПО и оборудование
              </Card.Text>
              <Button variant="dark" className="primary-button w-75">Подробнее</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 col-6 d-flex align-items-stretch" >
          <Card className="item-card shadow-sm mt-3 mt-md-5 d-flex flex-column align-items-center justify-content-between">
            <Card.Img
              variant="top"
              src={Filtration}
              className="item-img embed-responsive mt-3"
              alt="Фильтрационно Утилизационное оборудование"
            />
            <Card.Body
              className="d-flex flex-column align-items-center justify-content-between">

              <Card.Text className="text-center">
                Фильтрационно Утилизационное оборудование
              </Card.Text>
              <Button variant="dark" className="primary-button w-75">Подробнее</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default items;