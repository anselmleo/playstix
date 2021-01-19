import { Route, BrowserRouter, Switch } from "react-router-dom";
import Dashboard from "./containers/dashboard/Dashboard";
import LandingPage from "./containers/landingPage/LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={["/"]} component={LandingPage} />
          <Route path={["/dashboard"]} component={Dashboard} />
          {/* <Route path="/login" component={ Login }/>
          <Route path="/signup" component={ Signup }/> */}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
