import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Header from "../components/Header"
import Footer from "../components/Footer"

export default ({ data, pageContext }) => {
  const post = pageContext.allPostData
  // console.log(JSON.stringify(post, null, 2))

  return (
    <React.Fragment>
      <Header />
      <section className="container">
        <div className="article-container">
          <div className="row">
            <div className="col-lg-3 col-md d-flex justify-content-center">
              <div className="">
                <img
                  src={post.image.file.url}
                  alt=""
                  className="preview-img mx-auto"
                />
              </div>
            </div>
            <div className="col-lg-9 col-md">
              <hr />
              <h2 className="text-sm-center text-md-left">{post.title}</h2>
              <hr></hr>
              <article>{documentToReactComponents(post.textBody.json}</article>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  )
}
