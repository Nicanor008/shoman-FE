// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// export async function createPages ({ actions, graphql }) {
//     const { d } = await GetData("/contents/:")
//     const result = await GetData("/")

//     data.allMarkdownRemark.forEach(node => {
//       const slug = node.fields.slug
//       actions.createPage({
//         path: slug,
//         component: require.resolve(`./src/templates/blog-post.js`),
//         context: { slug: slug },
//       })
//     })
//   }

//   export async function createPages() {
//     // do async work
//     const result = await fetchExternalData()
//   }
  