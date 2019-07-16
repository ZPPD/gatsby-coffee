import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
// import Info from "../components/Home/info"
import Story from "../components/Home/Story"

const GalleyPage = ({ data }) => (
  <Layout>
    <SEO title="Gallery" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="gallery"
      styleClass="about-background"
    />
    <Story />
  </Layout>
)

// page query
export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default GalleyPage
