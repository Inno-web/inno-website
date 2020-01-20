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
          <div className="image-container">
            <img src={post.image.file.url} alt="" className="mt-2 mr-4 mb-2" />
          </div>
          <h2>{post.title}</h2>

          <article>{documentToReactComponents(post.textBody.json)}</article>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  )
}
