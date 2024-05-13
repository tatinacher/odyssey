import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";

const PostsTemplate = ({ data, children }) => {
  return (
    <div className="">
      <h1 className="text-2xl text-center pb-8">
        {data.mdx.frontmatter.title}
      </h1>
      <MDXProvider>{children}</MDXProvider>
    </div>
  );
};

export default PostsTemplate;

export const Head = ({ data }) => <title>{data.mdx.frontmatter.title}</title>;

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
