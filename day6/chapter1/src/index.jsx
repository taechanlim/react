const React = require('react')
const ReactDOM = require('react-dom/client')
const App = require('./App')

// ReactDOM.render(<App />,document.querySelector('#root')) -> 아래코드로 사용방법이 바뀜

const container = document.querySelector('#root')
const root = ReactDOM.createRoot(container)
root.render(<App />)

