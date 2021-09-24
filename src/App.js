 
import './App.css';
import {Home} from './Componets/Home';
import {AddGoverment} from './Componets/AddGoverment';
import {EditGoverment} from './Componets/EditGoverment';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {GlobalProvider} from './Context/GlobalState'
function App() {
  return (
  <div style={{maxWidth:"30rem", margin:"4rem auto"}}>
     <GlobalProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/addGoverment" component={AddGoverment} /> 
          <Route path="/EditGoverment/:id" component={EditGoverment} />
        </Switch>
      </Router>
     </GlobalProvider>

     

  </div>
    
  );
}

export default App;
