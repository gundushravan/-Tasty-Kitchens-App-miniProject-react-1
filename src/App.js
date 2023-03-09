import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'
import './App.css'

/* const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
] */

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
)

export default App
