
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Pages/Home/Home';


import NotFound from './Components/Pages/NotFound/NotFound';
import Appartments from './Components/Pages/Appartments/Appartments';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import AuthProvider from './Components/Context/AuthProvider';
import Dashboard from './Components/Dashboard/Dashboard';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
        <Router>
          <AuthProvider>
        
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/appartments">
              <Appartments></Appartments>
            </Route>
            <PrivateRoute path='/placeorder/:id'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route  path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/register'>
              <Register></Register>
            </Route>
            
            <PrivateRoute path="/dashboard">
                  <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path='*'>
                <NotFound></NotFound>
            </Route>
        </Switch>
          
          </AuthProvider>
        </Router>
    </div>
  );
}

export default App;
