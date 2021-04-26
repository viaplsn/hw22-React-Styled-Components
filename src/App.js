import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom'; 
import SignIn from "./pages/signin/signin.jsx";
import SignUp from "./pages/signup/signup.jsx";
import Homepage from './pages/homepage/homepage';

function App() {
  return (
    <Switch>
      <Route path="/SignIn" component={SignIn}/>
      <Route path="/SignUp" component={SignUp}/>
      <Route path="/Homepage" component={Homepage} />
      <Route path='/' exact>
        <Redirect to='/SignUp' />
      </Route>
      <Route path="*">
        <h1 className="noPage">No page found</h1>
      </Route>
    </Switch> 
  );
}

export default App;