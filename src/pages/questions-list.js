import React from "react"

import { Card } from "react-bootstrap"

import Header from "../components/Header"
import Footer from "../components/Footer"
import ClientForm from "../components/ClientFrom"

const formSuccessPage = () => (
  <React.Fragment>
    <Header />
    <main className="container d-flex justify-content-center">
      <Card className="client-form shadow-sm my-5 d-flex flex-column justify-content-center align-items-center">
        <ClientForm />
      </Card>
    </main>
    <Footer />
  </React.Fragment>
)

export default formSuccessPage
