import React from "react"
import { graphql } from "gatsby"

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
          <h2>{post.title}</h2>
          <img src={post.image.file.url} alt="" />
          <p>{post.description}</p>
          <p>{post.textBody.textBody}</p>
        </div>
        <pre>{JSON.stringify(post, null, 4)}</pre>
      </section>
      <Footer />
    </React.Fragment>
  )
}
