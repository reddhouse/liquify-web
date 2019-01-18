import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// Temp fix until react-hot-loader gets an update
// https://github.com/gaearon/react-hot-loader/issues/1088#issuecomment-434862175
import { setConfig } from 'react-hot-loader';
setConfig({ pureSFC: true });

ReactDOM.render(<App />, document.getElementById('app'))
