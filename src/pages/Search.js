import React, { Component } from "react";
import API from "../utils/API";
// import Container from "../components/Container";
// import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";
//import Alert from "../components/Alert";
import Header from "../components/Header";
import Project from "../components/Project";
import "../../src/index.css";

class Search extends Component {
  state = {
    search: "",
    breeds: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getBaseBreedsList()
      .then(res => this.setState({ breeds: res.data.message }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getDogsOfBreed(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        <Header>

        </Header>
        <Project classguy="row mt-5">
          <Project classguy="col-12 col-md-8">
            <section>
              <div className="card">
                <h5 className="card-header">Contact</h5>
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-12 col-md-8">
                        <p>
                          Name
                                            <input className="form-control mr-sm-2" type="text" placeholder="Name"
                            aria-label="Search" />
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-8">
                        <p>
                          Email
                                            <input className="form-control mr-sm-2" type="email" placeholder="Email"
                            aria-label="slim" />
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-8 form-group">
                        <label for="MessageArea">Message</label>
                        <textarea className="form-control" id="MessageArea" placeholder="Message"
                          rows="3"></textarea>

                      </div>
                    </div>
                  </form>
                  <a href="#" className="btn btn-primary">Submit</a>
                </div>
              </div>
            </section>
          </Project>
        </Project>

        {/* <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Breed!</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            breeds={this.state.breeds}
          />
          <SearchResults results={this.state.results} />
        </Container> */}
      </div>
    );
  }
}

export default Search;
