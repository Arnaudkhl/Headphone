import'bootstrap/dist/css/bootstrap.css';
import './Style.scss';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Catalogue from '../src/Pages/Catalogue';
import Home from '../src/Pages/Home';
import Contact from '../src/Pages/Contact';
import Connexion from '../src/Pages/Connexion';
import Panier from './Pages/Panier';
import Register from './Pages/Register';
import FicheProduit from './Pages/FicheProduit';





function App() {
  return (
   <Router>
     <Switch>
       <Route path="/"exact component={Home}/>
       <Route path="/catalogue"component={Catalogue}/>
       <Route path="/contact"component={Contact}/>
       <Route path="/connexion"component={Connexion}/>
       <Route path="/panier"component={Panier}/>
       <Route path="/register"component={Register}/>
       <Route path="/fiche"component={FicheProduit}/>
     </Switch>
   </Router>
  );
}

export default App;
