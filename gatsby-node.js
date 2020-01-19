/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query MyQuery {
      allContentfulCase {
        edges {
          node {
            id
            title
            image {
              file {
                url
              }
            }
            textBody {
              textBody
            }
            description
            slug
          }
        }
      }
    }
  `)

  // console.log(JSON.stringify(data.allContentfulCase.edges, null, " "))

  data.allContentfulCase.edges.forEach(edge => {
    const slug = edge.node.slug
    const title = edge.node.title
    const id = edge.node.id
    // const image = edge.node.id.image.file.url
    const textBody = edge.node.textBody.textBody.content
    const description = edge.node.description

    actions.createPage({
      path: `/all-cases/${slug}`,
      component: require.resolve(`./src/templates/case-article.js`),
      context: { slug, id, textBody, description, title },
    })
  })

  // data.allContentfulItem.edges.forEach(edge => {
  //   const slug = edge.node.slug
  //   actions.createPage({
  //     path: slug,
  //     component: require.resolve(`./src/templates/item-article.js`),
  //     context: { slug: slug },
  //   })
  // })
}
