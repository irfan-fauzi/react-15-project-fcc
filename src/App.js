
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
import TextGenerator from './Page/Projects/ParagraphGenerator';
import SimpleCrud from './Page/Projects/Crud-todo';
import SimpleCrudContekan from './Page/Projects/Crud-contekan';
import NavbarReact from './Page/Projects/Navbar-react/';

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
          <Route path="/lorem-generator" component={TextGenerator} />
          <Route path="/simple-crud" component={SimpleCrud} />
          <Route path="/simple-crud-contekan" component={SimpleCrudContekan} />
          <Route path="/navbar-react" component={NavbarReact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
