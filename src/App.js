import { BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import { Login } from './screens';
import { Main } from './components';

function App() {
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
