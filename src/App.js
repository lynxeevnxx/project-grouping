import './App.css';
import Navbar from './components/Navbar';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import Group from './components/Group';
import Home from './components/Home';
// import Guide from './components/Guide';
import Info from './components/Info';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
    <div className="App capitalize w-full h-full">
     <Navbar/>
     
     <div className='w-10/12 allContainer mt-20 my-10 mx-auto'>
     <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path="/create-group">
            <Group/>
          </Route>
          <Route exact path="/info">
            <Info/>
          </Route>
          <Route><NotFound/></Route>
      </Switch>
     </div>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
