import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPage = ({data}) => {
    return (
        <Layout pageTitle="My Blog Posts">
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <h2>{node.frontmatter.title}</h2>
                        <p>Posted: {node.frontmatter.date}</p>
                        <MDXRenderer>
                            {node.body}
                        </MDXRenderer>
                    </article>
                ))
            }
            <StaticImage 
                alt="another Azuki"
                src="https://i1.sndcdn.com/artworks-M2WleHThylClTCWD-Ee9tiw-t500x500.jpg">
            </StaticImage>
        </Layout>
    )
}

export const query = graphql
    `query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
              id
              frontmatter {
                date(formatString: "MMMM D, YYYY")
                title
              }
              body
            }
          } 
    }`

export default BlogPage