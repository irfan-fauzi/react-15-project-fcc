
import './App.css';
import HomeIndex from './Page/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Birthday from '../src/Page/Projects/Birthday-reminder/index';
import Tours from './Page/Projects/Tours';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomeIndex} />
          <Route path="/birthday" component={Birthday} />
          <Route path="/tours" component={Tours} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
