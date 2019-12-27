import React from 'react';

const stages = () => {
  return (
    <section id="stages" className="container mb-5">
      <h2 className="text-center" style={{marginTop: "65px"}}>
        Этапы работы
      </h2>
      <div className="row">
        <div className="col-lg-4 col-12 my-4">
          <div className="d-flex align-items-center">
            <div>
              <div className="stage-number d-flex justify-content-center align-items-center">
                <span>1</span>
              </div>
            </div>
            <p className="mb-0 ml-3">
              Вы отправляете заявку на почту или заполняете опросный лист
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-12 my-4">
          <div className="d-flex align-items-center">
            <div>
              <div className="stage-number d-flex justify-content-center align-items-center">
                <span>2</span>
              </div>
            </div>
            <p className="mb-0 ml-3">
              Мы связываемся с вами и детально обсуждаем задачу
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-12 my-4">
          <div className="d-flex align-items-center">
            <div>
              <div className="stage-number d-flex justify-content-center align-items-center">
                <span>3</span>
              </div>
            </div>
            <p className="mb-0 ml-3">
              Согласовываем и утверждаем техническое задание
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-12 my-4">
          <div className="d-flex align-items-center">
            <div>
              <div className="stage-number d-flex justify-content-center align-items-center">
                <span>4</span>
              </div>
            </div>
            <p className="mb-0 ml-3">
              Формируем, согласовываем предложение и сроки реализации
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-12 my-4">
          <div className="d-flex align-items-center">
            <div>
              <div className="stage-number d-flex justify-content-center align-items-center">
                <span>5</span>
              </div>
            </div>
            <p className="mb-0 ml-3">
              Согласовываем РКД и объем поставки
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-12 my-4">
          <div className="d-flex align-items-center">
            <div>
              <div className="stage-number d-flex justify-content-center align-items-center">
                <span>6</span>
              </div>
            </div>
            <p className="mb-0 ml-3">
              Запускаем в производство
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div>
          <i className="fas fa-chevron-down fa-4x"></i>
        </div>
        <div className="text-center">
          <p className="my-0">Осуществляем поставку</p>
          <p className="my-0">ШМР ПНР</p>
          <p className="my-0 border-bottom">Пост гарантийное обслуживание и поддержка</p>
        </div>
      </div>
    </section>
  );
};

export default stages;