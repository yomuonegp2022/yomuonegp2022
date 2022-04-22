import * as React from "react"

import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const StLink = styled(Link)`
  color: white;
  activecolor: #800000;
`
const Omake = () => (
  <Layout title="運営感想">
    <Seo title="運営感想" />
    <p>2022年度読ム-１グランプリ主催が運営の感想をゆるく書いていきます。</p>
    <h3><StLink to="/omake1">はじめに</StLink></h3>
    <h3>サイトについて　<span style={{fontSize: `70%`}}>under construction</span></h3>
    <h3>音声に関するルールについて　<span style={{fontSize: `70%`}}>under construction</span></h3>
    <h3>その他　<span style={{fontSize: `70%`}}>under construction</span></h3>
  </Layout>
)

export default Omake