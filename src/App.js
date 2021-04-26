import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom'; 
import SignIn from "./pages/signin/signin.jsx";
import SignUp from "./pages/signup/signup.jsx";
import Homepage from './pages/homepage/homepage';

function App() {
  return (
    <Switch>
      <Route path="/hw22-React-Styled-Components/SignIn" component={SignIn}/>
      <Route path="/hw22-React-Styled-Components/SignUp" component={SignUp}/>
      <Route path="/hw22-React-Styled-Components/Homepage" component={Homepage} />
      <Route path='/hw22-React-Styled-Components' exact>
        <Redirect to='/hw22-React-Styled-Components/SignUp' />
      </Route>
      <Route path="*">
        <h1 className="noPage">No page found</h1>
      </Route>
    </Switch> 
  );
}

export default App;