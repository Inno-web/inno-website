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
        <div className="article-container d-xs-flex d-md-block">
          <img
            src={post.image.file.url}
            alt=""
            className="preview-img mt-2 mr-4 mb-2 float-xs-none float-md-left"
          />

          <h2>{post.title}</h2>

          <article>{documentToReactComponents(post.textBody.json)}</article>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  )
}
