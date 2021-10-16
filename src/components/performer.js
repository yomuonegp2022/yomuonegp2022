import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const StLink = styled(Link)`
  color: white;
  activecolor: #800000;
  text-decoration: none;
`

const Performer = ({ name, id, comment, movie }) => (
      <div class="performer">
        <StaticImage
          src={`../images/performer/${name}.jpg"`}
          width={150}
          layout="fixed"
          formats={["auto", "webp", "avif"]}
        />
        <div class="performer-items">
          <div class="performer-item-name">
            {name}
          </div>
          <a class="performer-item-url" href={`https://nicovideo.jp/user/${id}`}>
            user/{id}
          </a>
          <div class="performer-item-comment">
            {comment}
          </div>
          <a class="performer-item-movie" href={`https://nicovideo.jp/watch/${movie}`}>
            {movie}
          </a>
        </div>
      </div>
)

Performer.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  comment: PropTypes.string,
  movie: PropTypes.string,
}

Performer.defaultProps = {
  name: ``,
  id: ``,
  comment: ``,
  movie: ``,
}

export default Performer