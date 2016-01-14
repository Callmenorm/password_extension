import React from 'react'
import ReactDOM from 'react-dom'
import Options from './components/options'
// import { Router, Route } from 'react-router'

const mountNode = document.getElementById('container')

ReactDOM.render(<Options/>, mountNode)
// ReactDOM.render((
//   <Router>
//     <Route path="/" component={Options}>

//     </Route>
//   </Router>
// ), mountNode)
