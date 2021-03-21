import { BrowserRouter as Router ,Route, Switch, useHistory} from 'react-router-dom';
import { Login } from './screens';
import { Main } from './components';

function App() {
  window.custom_history = useHistory()
  return (
    <Router>
      <Switch>
      <Route path="/login" component={Login}/>
      <Main/>
      </Switch>
    </Router>
  );
}

export default App;
