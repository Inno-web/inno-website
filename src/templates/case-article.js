import React, { useState } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Carousel from "react-bootstrap/Carousel"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"

import Header from "../components/Header"
import Footer from "../components/Footer"

import { MdFullscreen } from "react-icons/md"
import SEO from "../components/seo"

export default ({ data, pageContext }) => {
  const post = pageContext.allPostData
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <React.Fragment>
      <SEO title={post.title} />
      <Header />
      <section className="container content">
        <div className="article-container d-xs-flex flex-column">
          <div className="d-flex justify-content-center float-xs-none float-md-left mt-md-2 mr-md-4 mb-md-2 order-1">
            <Carousel className="preview-carousel-container ">
              {post.articleImages.map((image, index) => {
                return (
                  <Carousel.Item className="preview-carousel-container" key={index.toString()}>
                    <img src={image.file.url} className="preview-img" alt={post.title} />
                    <Carousel.Caption>
                      <h3>
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>На весь экран</Tooltip>}
                        >
                          <MdFullscreen
                            style={{ cursor: "pointer" }}
                            onClick={handleShow}
                          />
                        </OverlayTrigger>
                      </h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              })}
            </Carousel>
          </div>
          <div className="order-1">
            <h2 className="">{post.title}</h2>
            <hr></hr>
          </div>
          <h5>{post.description}</h5>
          <article>{documentToReactComponents(post.textBody.json)}</article>
        </div>
        {/* Image Modal */}
        <Modal show={show} size="lg" onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{post.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Carousel className="">
              {post.articleImages.map((image, index) => {
                return (
                  <Carousel.Item key={index.toString()}>
                    <img
                      src={image.file.url}
                      className="fullscreen-img"
                      alt={post.title}
                    />
                  </Carousel.Item>
                )
              })}
            </Carousel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Закрыть
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
      <Footer />
    </React.Fragment>
  )
}
