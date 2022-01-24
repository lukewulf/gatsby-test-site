import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const BlogPage = ({data}) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
                {
                    data.allFile.nodes.map(node => (
                        <li key={node.name}>
                            {node.name}
                        </li>
                    ))
                }
            </ul>
            <StaticImage 
                alt="another Azuki"
                src="https://i1.sndcdn.com/artworks-M2WleHThylClTCWD-Ee9tiw-t500x500.jpg">
            </StaticImage>
        </Layout>
    )
}

export const query = graphql
    `query {
        allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
            nodes {
                name
            }
        }  
    }`

export default BlogPage