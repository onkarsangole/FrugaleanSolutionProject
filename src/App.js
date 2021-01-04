import './App.css';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  { Overview, OverviewOne } from './Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './Reports';
import Team from './Team';

function App() {
  return (
    <Router>
    <Sidebar />
    <Switch>
      <Route path='/overview' exact component={OverviewOne}/>
      <Route path='/overview/users' exact component={Overview} />
      <Route path='/reports' exact component={Reports} />
      <Route path='/reports/reports1' exact component={ReportsOne} />
      <Route path='/reports/reports2' exact component={ReportsTwo} />
      <Route path='/reports/reports3' exact component={ReportsThree} />
      <Route path='/team' exact component={Team} />
    </Switch>
  </Router>
  );
}

export default App;
