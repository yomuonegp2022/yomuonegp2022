import * as React from "react"

import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const StLink = styled(Link)`
  color: white;
  activecolor: #800000;
`
const NotFoundPage = () => (
  <Layout title="ページが見つかりません">
    <Seo title="404" />
    <h1>404: Not Found</h1>
    <p style={{marginBottom: `3rem`}}>お探しのページは、移動または削除された可能性があります。</p>
    <p><StLink to="/">トップページ</StLink></p>
    <p><StLink to="/gacha">読ム-１参加作品ガチャ</StLink></p>
  </Layout>
)

export default NotFoundPage
