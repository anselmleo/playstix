import React, { useState, useEffect } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Dashboard from "./containers/dashboard/Dashboard";
import LandingPage from "./containers/landingPage/LandingPage";
import Login from "./components/signIn/SignIn";
import movieList from "./services/movieAPI/movieAPIService";
import SignUp from "./components/signUp/SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
// import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [actionMovies, setActionMovies] = useState([]);
  const [value, setValue] = React.useState(0);
  const [imgUrl, setImgUrl] = React.useState("");
  const getActionMovieList = (e) => {
    movieList
      .getAllMovies()
      .then((response) => {
        console.log(response.data.results);
        setActionMovies(response.data.results);
      })
      .catch((e) => {
        console.log("the error", e.response);
      });
  };
  let images = [];
  actionMovies.map((movies) =>
    images.push(`url(https://image.tmdb.org/t/p/w500/${movies.backdrop_path})`)
  );

  React.useEffect(() => {
    getActionMovieList();
    const interval = setInterval(() => {
      setValue((v) => (v === 20 ? 0 : v + 1));
    }, 6000);
  }, []);

  const hoverImage = `url(https://image.tmdb.org/t/p/w500/${imgUrl})`;

  return (
    // <ChakraProvider>
    <AuthProvider>
      <div
        style={{
          backgroundImage: imgUrl ? hoverImage : images[value],
          backgroundBlendMode: "darken",
          backgroundColor: "rgba(0,0,0,.8)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          WebkitBackgroundSize: "cover",
          height: "100%",
          transition: "ease-in-out",
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path={["/"]}>
              <LandingPage
                imgUrl={imgUrl}
                setImgUrl={setImgUrl}
                actionMovies={actionMovies}
              />
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/register" component={SignUp} />
            <Route exact path="/dashboard">
              <PrivateRoute>
                <Dashboard
                  setImgUrl={setImgUrl}
                  imgUrl={imgUrl}
                  actionMovies={actionMovies}
                  component={Dashboard}
                />
              </PrivateRoute>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </AuthProvider>
    // </ChakraProvider>
  );
}

export default App;
