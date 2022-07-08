import React from "react";
import { Route, Switch } from "react-router-dom";
import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
import Movie from "./Movie";
import Footer from "./Footer";
import NotFound404 from "./NotFound404";
import GenresInDb from "./GenresInDb";
import LastMovieDb from "./LastMovieDb";

function ContentWrapper() {
  return (
    <>
      {/*<!-- Content Wrapper -->*/}
      <div id="content-wrapper" className="d-flex flex-column">
        {/*<!-- Main Content -->*/}
        <div id="content">
          <TopBar />

          <Switch>
            <Route path="/" exact>
              <ContentRowTop />
              <Movie />
            </Route>

            <Route path="/genres">
              <GenresInDb />
            </Route>

            <Route path="/lastMovie">
              <LastMovieDb />
            </Route>

            <Route path="/movies">
              <Movie />
            </Route>

            <Route component={NotFound404} />
          </Switch>

          <Footer />
        </div>
      </div>
    </>
  );
}
export default ContentWrapper;
