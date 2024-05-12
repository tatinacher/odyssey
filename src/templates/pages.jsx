import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { routes } from "../assets/routes";
import { Header } from "../ui";

const PostsTemplate = ({ data, children }) => {
  return (
    <div className='bg-slate-400'>
      <Header routes={routes} />
      123
      <h1>{data.mdx.frontmatter.title}</h1>
      <MDXProvider>{children}</MDXProvider>
    </div>
  )
}

export default PostsTemplate

export const Head = ({ data }) => <title>{data.mdx.frontmatter.title}</title>

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`