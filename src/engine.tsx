import React from 'react' 
import ReactDOM from 'react-dom'

import Home from './components/Home/index'

ReactDOM.render(<Home/>, document.getElementById('root')); 

// if (module.hot) {
//     module.hot.accept()
// }

const m = module as any
if(m && m.hot) m.hot.accept()

