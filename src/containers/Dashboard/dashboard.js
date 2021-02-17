import React, { useState } from "react";
import Styles from "./Dashboard.module.css";
import DPNav from "../../components/DPNav/DPNav";
import DashboardMovie from "../../components/dashboardmovie/DashboardMovie";

function Dashboard({ actionMovies, imgUrl, setImgUrl }) {
  const [movieGenre, setMovieGenre] = useState({
    children: false,
    comedy: false,
    popular: true,
    action: false,
    drama: false,
    nollywood: false,
  });
  const handleChilrenClick = () => {
    setMovieGenre({
      children: true,
      comedy: false,
      popular: false,
      action: false,
      drama: false,
      nollywood: false,
    });
  };

  const handlePopularClick = () => {
    setMovieGenre({
      children: false,
      comedy: false,
      popular: true,
      action: false,
      drama: false,
      nollywood: false,
    });
  };

  const handleComedyClick = () => {
    setMovieGenre({
      children: false,
      comedy: true,
      popular: false,
      action: false,
      drama: false,
      nollywood: false,
    });
  };
  const handleActionClick = () => {
    setMovieGenre({
      children: false,
      comedy: false,
      popular: false,
      action: true,
      drama: false,
      nollywood: false,
    });
  };
  const handleDramaClick = () => {
    setMovieGenre({
      children: false,
      comedy: false,
      popular: false,
      action: false,
      drama: true,
      nollywood: false,
    });
  };

  const handleNollywoodClick = () => {
    setMovieGenre({
      children: false,
      comedy: false,
      popular: false,
      action: false,
      drama: false,
      nollywood: true,
    });
  };

  return (
    <>
      <div className={Styles.body}>
        <DPNav />

        <div className={Styles.movies}>
          <DashboardMovie
            movieGenre={movieGenre}
            children={handleChilrenClick}
            popular={handlePopularClick}
            drama={handleDramaClick}
            nollywood={handleNollywoodClick}
            comedy={handleComedyClick}
            action={handleActionClick}
            actionMovies={actionMovies}
            imgUrl={imgUrl}
            setImgUrl={setImgUrl}
          />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
