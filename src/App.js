
import './App.css';
import HomeIndex from './Page/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Birthday from '../src/Page/Projects/Birthday-reminder/index';
import Tours from './Page/Projects/Tours';
import question from './Page/Projects/Q&A/question';
import Food from './Page/Projects/Food';
import Tabs from './Page/Projects/Tabs-Experience';
import TabsContekan from './Page/Projects/Tabs-contekan';
import Slider from './Page/Projects/Slider';
import SliderAuto from './Page/Projects/SliderAuto';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomeIndex} />
          <Route path="/birthday" component={Birthday} />
          <Route path="/tours" component={Tours} />
          <Route path="/qa" component={question} />
          <Route path="/food" component={Food} />
          <Route path="/tabs" component={Tabs} />
          <Route path="/tabscontek" component={TabsContekan} />
          <Route path="/slider" component={Slider} />
          <Route path="/slider-auto" component={SliderAuto} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
