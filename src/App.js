import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Dashboard from './containers/Dashboard/Dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path = {["/"]} component = { Dashboard }/>
          {/* <Route path="/login" component={ Login }/>
          <Route path="/signup" component={ Signup }/> */}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;