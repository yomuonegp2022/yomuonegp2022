import * as React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import { withPrefix } from 'gatsby'

const Performer = ({ name, _id, url, comment, movie }) => {
  const [state, setState] = useState("close");
  function open(e) {
    setState(prevState => {
      return prevState === "close" ? "open" : "close"
    })
  }
  return (
    <div>
      {name === "" ? <div /> :
        <div class={`performer ${state}`} id={name} onClick={open}>
          <div class={`performer-icon ${state}-icon`} />
          {_id === "" ? 
            <img class="performer-img" src={withPrefix(`/img/${name}.jpg`)} alt={name} /> : 
            <img class="performer-img" src={withPrefix(`/img/${_id}.jpg`)} alt={name} />}
          <div class="performer-items">
            <div class="performer-item-name">
              {name}
            </div>
            {_id === "" ? <div /> :
              <a class="performer-item-url" target="_blank" rel="noreferrer" title={_id} href={`https://nicovideo.jp/user/${_id}`}>
                user/{_id}
              </a>
            }
            {url === "" ? <div /> :
              <a class="performer-item-url" target="_blank" rel="noreferrer" title={url} href={url}>
                {url}
              </a>
            }
            <div class="performer-item-comment">
              <div dangerouslySetInnerHTML={{ __html: comment }} />
            </div>
            {movie.map(m =>
              {return m === "" ? <div /> :
                <div><a class="performer-item-movie" target="_blank" rel="noreferrer" title={m} href={`https://nicovideo.jp/watch/${m}`}>
                  {m}
                </a></div>
              }
            )}
          </div>
        </div>
      }
  </div>
  )
}

Performer.defaultProps = {
  name: '',
  _id: '',
  url: '',
  comment: '',
  movie: [],
}

Performer.propTypes = {
  name: PropTypes.string,
  _id: PropTypes.string,
  url: PropTypes.string,
  comment: PropTypes.string,
  movie: PropTypes.array,
}

export default Performer