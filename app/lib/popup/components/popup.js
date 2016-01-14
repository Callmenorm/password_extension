import React from 'react'

const { string } = React.PropTypes

const Popup = React.createClass({
  getDefaultProps () {
    return {
      title: 'Hello Popup'
    }
  },

  propTypes: {
    title: string
  },

  render () {
    const {title} = this.props

    return <div>
      <h2>{title}</h2>
      <p>Content</p>
    </div>
  }
})

export default Popup
