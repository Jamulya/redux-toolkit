import React from 'react'

const Helmet = (props) => {
    document.title = 'Store ' + props.title
  return (
    <div>{props.children}</div>
  )
}

export default Helmet