import path from "path"


/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
export const createPages = async ({ graphql, actions, reporter }) => {
  console.log('createPAge')
    const { createPage } = actions
  
    const result = await graphql(`
      query {
        allMdx {
          nodes {
            id
            frontmatter {
              slug
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    `)
  
    if (result.errors) {
      reporter.panicOnBuild("Error loading MDX result", result.errors)
    }
  
    const posts = result.data.allMdx.nodes
  
    posts.forEach(node => {
      // Don't create a page for src/pages/chart-info.mdx since this already gets created
      createPage({
        path: node.frontmatter.slug,
        component: `${path.resolve(
          `./src/templates/pages.jsx`
        )}?__contentFilePath=${node.internal.contentFilePath}`,
        context: { id: node.id },
      })
    })
  }