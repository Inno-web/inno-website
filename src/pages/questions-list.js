import React from "react"

import { Card } from "react-bootstrap"

import Header from "../components/Header"
import Footer from "../components/Footer"
import ClientForm from "../components/ClientFrom"
import { Form, Row, Col, Button } from "react-bootstrap"

const formSuccessPage = () => (
  <React.Fragment>
    <Header />
    <main className="container">
      <div className="d-flex justify-content-center">
        <div className="w-75">
          <Card className="client-form shadow-sm my-5">
            <ClientForm />
          </Card>
        </div>
      </div>
    </main>
    <Footer />
  </React.Fragment>
)

export default formSuccessPage
