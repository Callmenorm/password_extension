import React from 'react'
import ReactDOM from 'react-dom'
import ContentScript from './components/content-script'

const mountNode = document.createElement('div')
document.body.appendChild(mountNode)

ReactDOM.render(<ContentScript />, mountNode)
