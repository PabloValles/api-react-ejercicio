import React, { Component } from "react";
import Genre from "./Genre";

class GenresInDb extends Component {
  constructor() {
    super();
    this.state = {
      genresList: [],
      boxBackground: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/genres")
      .then((response) => response.json())
      .then((genres) => {
        this.setState({ genresList: genres.data });
        console.log(this.state.genresList);
      })
      .catch((err) => console.log(err));
  }

  backgroundOn() {
    this.setState({ boxBackground: true });
    //document.querySelector(".fondoCaja").classList.toggle("bg-secondary");
  }
  backgroundOf() {
    this.setState({ boxBackground: false });
    //document.querySelector(".fondoCaja").classList.toggle("bg-secondary");
  }

  render() {
    return (
      <>
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6
                className="m-0 font-weight-bold text-gray-800"
                onMouseOver={() => this.backgroundOn()}
                onMouseLeave={() => this.backgroundOf()}
              >
                Genres in Data Base
              </h6>
            </div>
            <div
              className={`card-body ${
                this.state.boxBackground ? "bg-secondary" : ""
              }`}
            >
              <div className="row">
                {this.state.genresList.map((genre, index) => {
                  return <Genre {...genre} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default GenresInDb;
