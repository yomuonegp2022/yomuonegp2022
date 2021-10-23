import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import {
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const StLink = styled(Link)`
  color: white;
  activecolor: #800000;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <header>
    <h3 class="title" style={{paddingLeft: 0}}>
      <StLink to="/">
        {siteTitle}
      </StLink>
    </h3>
    <h2 class="sp-title">
      <StLink to="/">
        読ム-１グランプリ2022
      </StLink>
    </h2>
    <nav class="scroll">
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>
            ホーム
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/about" className={navLinkText}>
            概要
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/rule" className={navLinkText}>
            ルール
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/performers" className={navLinkText}>
            参加者一覧
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
