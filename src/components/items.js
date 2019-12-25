import React from 'react';

import {Card, Button} from 'react-bootstrap'
import Filtration from '../images/filtration.jpg'

const items = () => {
  return (
    <div className="container">
      <h2>Типы оборудования</h2>
      <div className="row">
        <div className="col-md-3">
          <Card className="item-card">
            <Card.Img 
              variant="top" 
              src={Filtration}
              className="item-img embed-responsive"
            />
            <Card.Body 
            className="d-flex flex-column align-items-center">
              
              <Card.Text className="text-center">
                Фильтрация-Сепарация жидкости и газа
              </Card.Text>
              <Button variant="dark rounded-lg">Подробнее</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="item-card">
            <Card.Img 
              variant="top" 
              src={Filtration}
              className="item-img"
            />
            <Card.Body>
              
              <Card.Text>
                Фильтрация-Сепарация жидкости и газа
        </Card.Text>
              <Button variant="dark rounded-lg">Подробнее</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="item-card">
            <Card.Img 
              variant="top" 
              src={Filtration}
              className="item-img"
            />
            <Card.Body>
              
              <Card.Text>
                Фильтрация-Сепарация жидкости и газа
        </Card.Text>
              <Button variant="dark rounded-lg">Подробнее</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="item-card">
            <Card.Img 
              variant="top" 
              src={Filtration}
              className="item-img"
            />
            <Card.Body>
              
              <Card.Text>
                Фильтрация-Сепарация жидкости и газа
        </Card.Text>
              <Button variant="dark rounded-lg">Подробнее</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      
    </div>
  );
};

export default items;