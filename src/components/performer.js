import * as React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import { withPrefix } from 'gatsby'

const Performer = ({ name, url, comment, movie }) => {
  const [state, setState] = useState("close");
  function open(e) {
    setState(prevState => {
      return prevState === "close" ? "open" : "close"
    })
  }
  return (
    <div class={`performer ${state}`} onClick={open}>
      <div class={`performer-icon ${state}-icon`} />
      <img class="performer-img" src={withPrefix(`/img/${name}.jpg`)} alt={name} />
      <div class="performer-items">
        <div class="performer-item-name">
          {name}
        </div>
        <a class="performer-item-url" target="_blank" title={url} href={`https://nicovideo.jp/user/${url}`}>
          user/{url}
        </a>
        <div class="performer-item-comment">
          {comment}
        </div>
        {movie === "" ? <div /> :
          <a class="performer-item-movie" target="_blank" title={movie} href={`https://nicovideo.jp/watch/${movie}`}>
            {movie}
          </a>}
      </div>
    </div>
  )
}

Performer.defaultProps = {
  name: '',
  url: '',
  comment: '',
  movie: '',
}

Performer.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  comment: PropTypes.string,
  movie: PropTypes.string,
}

export default Performer