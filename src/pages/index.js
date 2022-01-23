import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// styles

const titleStyle = {
  color: "red",
  border: "2px solid blue",
  fontWeight: "bold",
  fontSize: 24,
}

// markup
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I'm making this page by following the gatsby tutorial</p>
        <StaticImage
          alt="Tyrese Haliburton's Azuki"
          src="https://pbs.twimg.com/media/FJqHjilVQAMzyhc?format=jpg&name=large"
        ></StaticImage>
      </Layout>
    </main>
  )
}

export default IndexPage
