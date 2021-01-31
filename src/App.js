import Header from './components/Header/Header';
import './styles/App.css';
import './styles/style.css';
import { BrowserRouter as Router ,Route} from 'react-router-dom';
import { Login } from './screens';

function App() {
  return (
    <Router>
      {/* <Header/> */}
      <Route exact path="/login" component={Login}/>
    </Router>
  );
}

export default App;
