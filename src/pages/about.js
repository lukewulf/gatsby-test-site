//Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Greeting from '../components/greeting'

//Step 2: Define component
const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi there!  I'm the proud creator of this site, which is built upon Gatsby</p>
            <Greeting name="Luke"></Greeting>
            <Greeting name="Marc"></Greeting>
        </Layout>
    )
}

// Step 3: Export the component
export default AboutPage