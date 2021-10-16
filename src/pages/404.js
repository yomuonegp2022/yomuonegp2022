import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout title="ページが見つかりません">
    <Seo title="404" />
    <h1>404: Not Found</h1>
    <p>お探しのページは、移動または削除された可能性があります。</p>
  </Layout>
)

export default NotFoundPage
