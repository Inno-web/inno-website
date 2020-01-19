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
              json
            }
            description
            slug
          }
        }
      }
      allContentfulItem {
        edges {
          node {
            id
            slug
            title
            textBody {
              json
            }
            image {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  // console.log(JSON.stringify(data.allContentfulCase.edges, null, " "))

  data.allContentfulCase.edges.forEach(edge => {
    const slug = edge.node.slug

    actions.createPage({
      path: `/all-cases/${slug}`,
      component: require.resolve(`./src/templates/case-article.js`),
      context: { allPostData: edge.node },
    })
  })

  data.allContentfulItem.edges.forEach(edge => {
    const slug = edge.node.slug
    actions.createPage({
      path: `/all-items/${slug}`,
      component: require.resolve(`./src/templates/item-article.js`),
      context: { allPostData: edge.node },
    })
  })
}
