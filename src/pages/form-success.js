import React from "react"
import { MdDone } from "react-icons/md"

import { Card } from "react-bootstrap"

import Header from "../components/Header"
import Footer from "../components/Footer"
import SEO from "../components/seo"

const formSuccessPage = () => (
  <React.Fragment>
    <SEO title="Успех" />
    <Header />
    <main
      className="container d-flex justify-content-center"
      style={{ maxHeight: "1000px", height: "100%" }}
    >
      <Card
        className=" conatainer w-lg-50 w-xs-100 shadow-sm my-5 d-flex flex-column justify-content-center align-items-center"
        style={{ height: "400px" }}
      >
        <div
          className="mb-4"
          style={{ backgroundColor: "#48b02c", borderRadius: "50%" }}
        >
          <MdDone style={{ fontSize: "5rem", color: "white" }} />
        </div>
        <h3 className="text-center mx-3">Заявка успешно отправлена</h3>
        <p className="text-muted text-center ">
          Менеджер компании INNO свяжется с Вами
        </p>
      </Card>
    </main>
    <Footer />
  </React.Fragment>
)

export default formSuccessPage
