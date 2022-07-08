import React from "react";
import { Link } from "react-router-dom";

function NotFound404() {
  return (
    <>
      <div id="wrapper">
        <div className="container-fluid">
          <div className="row py-5">
            <div className="col-12">
              <div class="p-5 bg-light">
                <div class="container">
                  <h1 class="display-3">404 !</h1>
                  <p class="lead">Error not found</p>

                  <p>More info</p>
                  <p class="lead">
                    <Link class="btn btn-primary btn-lg" to="/">
                      Inicio
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound404;
