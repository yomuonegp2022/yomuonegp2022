import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const StLink = styled(Link)`
  color: white;
  activecolor: #800000;
`

const About = () => (
  <Layout title="概要">
    <Seo title="概要" />
    <p>準備中</p>
  </Layout>
)

export default About
