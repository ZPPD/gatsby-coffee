import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
// import Info from "../components/Home/info"
import Gallery from "../components/Home/Gallery"

const GalleyPage = ({ data }) => (
  <Layout>
    <SEO title="Gallery" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="gallery"
      styleClass="about-background"
    />
    <Gallery />
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
