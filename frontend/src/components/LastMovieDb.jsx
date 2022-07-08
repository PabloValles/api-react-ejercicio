import React, { Component } from "react";
import imagenFondo from "../assets/images/mandalorian.jpg";

class LastMovieDb extends Component {
  constructor() {
    super();
    this.state = {
      LastMovieDb: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/movies")
      .then((response) => response.json())
      .then((movies) => {
        let lastMovie = movies.data.pop();
        this.setState({ LastMovieDb: lastMovie });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h5 className="m-0 font-weight-bold text-gray-800">
                Última peli: {this.state.LastMovieDb.title}
              </h5>
            </div>
            <div className="card-body">
              <div className="text-center">
                <img
                  className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  style={{ width: 40 + "rem" }}
                  src={imagenFondo}
                  alt=" Star Wars - Mandalorian "
                />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, consequatur explicabo officia inventore libero
                veritatis iure voluptate reiciendis a magnam, vitae, aperiam
                voluptatum non corporis quae dolorem culpa citationem ratione
                aperiam voluptatum non corporis ratione aperiam voluptatum quae
                dolorem culpa ratione aperiam voluptatum?
              </p>

              <span class="badge bg-primary text-white">
                Género: {this.state.LastMovieDb.title}
              </span>
              <hr />
              <a
                className="btn btn-danger"
                target="_blank"
                rel="nofollow"
                href="/"
              >
                View movie detail
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LastMovieDb;
