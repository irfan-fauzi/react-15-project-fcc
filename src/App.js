
import './App.css';
import HomeIndex from './Page/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Birthday from '../src/Page/Projects/Birthday-reminder/index';
import Tours from './Page/Projects/Tours';
import question from './Page/Projects/Q&A/question';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomeIndex} />
          <Route path="/birthday" component={Birthday} />
          <Route path="/tours" component={Tours} />
          <Route path="/qa" component={question} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
