import React from 'react'

const { string } = React.PropTypes

const ContentScript = React.createClass({
  getDefaultProps () {
    return {
      title: 'I am ContentScript'
    }
  },

  propTypes: {
    title: string
  },

  render () {
    const {children, title} = this.propTypes
    return <div>
      <h2>{title}</h2>
      <p>Content</p>
      {children}
    </div>
  }
})

export default ContentScript
