import React, { Component } from "react";
//import API from "../utils/API";
import Header from "../components/Header";
import Project from "../components/Project";
import "../../src/index.css";
//import Card from "../components/Card";
//import Alert from "../components/Alert";

class Discover extends Component {
  state = {
    image: "",
    match: false,
    matchCount: 0
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadNextDog();
  }

  handleBtnClick = event => {
    // Get the data-value of the clicked button
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    const newState = { ...this.state };

    if (btnType === "pick") {
      // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
      newState.match = 1 === Math.floor(Math.random() * 5) + 1;

      // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
      newState.matchCount = newState.match
        ? newState.matchCount + 1
        : newState.matchCount;
    } else {
      // If we thumbs down'ed the dog, we haven't matched with it
      newState.match = false;
    }
    // Replace our component's state with newState, load the next dog image
    this.setState(newState);
    this.loadNextDog();
  };

  loadNextDog = () => {
    // API.getRandomDog()
    //   .then(res =>
    //     this.setState({
    //       image: res.data.message
    //     })
    //   )
    //   .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Header>

        </Header>
        <Project classguy="row mt-5 justify-content-center background-guy">
          <Project classguy="col-12">
            <section>
              <div className="row">
                <div className="col-12">
                  <h2>
                    Portfolio
                            </h2>
                </div>
              </div>
            </section>
            <section>
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="card text-white bg-success mb-3 mx-0" style="max-width: 18rem;">
                    <div className="card-header mx-0">LinkedIn</div>
                    <div className="card-body mx-0">
                      <h5 className="card-title">My LinkedIn Profile</h5>
                      <p className="card-text">Click on the LinkedIn button to see my LinkedIn Profile</p>
                      <a className="btn btn-secondary btn-lg" target="_blank"
                        href="https://www.linkedin.com/in/mario-thompson-991b8486/">LinkedIn
                                        Profile</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="card text-white bg-success mb-3" style="max-width: 18rem;">
                    <div className="card-header">Github</div>
                    <div className="card-body">
                      <h5 className="card-title">See my GitHub Profile</h5>
                      <p className="card-text">Click the link to see my GitHub Profile and several
                      links to coding examples
                                    </p>
                      <a className="btn btn-secondary btn-lg" target="_blank"
                        href="https://github.com/MarioThompson0010">Link
                        to
                                        GitHub Profile</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="card text-white bg-success mb-3" style="max-width: 18rem;">
                    <div className="card-header">Resume</div>
                    <div className="card-body">
                      <h5 className="card-title">Download Resume in PDF</h5>
                      <p className="card-text">Click on the button to see my resume.

                                    </p>
                      <a className="btn btn-secondary btn-lg" target="_blank"
                        href="./Assets/Thompson_Mario_Resume.pdf">Link
                                        to my resume</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">

                <div className="col-12 col-md-4">
                  <div className="card text-white bg-success mb-3" style="max-width: 18rem;">
                    <div className="card-header">Exemplary Example 1</div>
                    <div className="card-body">
                      <h5 className="card-title">Weather Tracker</h5>
                      <p className="card-text">
                        Click on the buttons below to see the deployed application. Click the link
                        below that one to see the code.

                                    </p>
                      <img src="./Assets/ScreenshotWeather.PNG" className="margin-between-anchors grow-button"
                        width="100%" height="100%" alt="Weather Report" />
                      <a className="btn btn-secondary btn-lg margin-between-anchors" target="_blank"
                        href="https://mariothompson0010.github.io/06_Weather_Teller/">Link to
                                        deployed application</a>
                      <a className="btn btn-secondary btn-lg" target="_blank"
                        href="https://github.com/MarioThompson0010/06_Weather_Teller">Link
                        to
                                        GitHub repository</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="card text-white bg-success mb-3" style="max-width: 18rem;">
                    <div className="card-header">Exemplary Example 2</div>
                    <div className="card-body">
                      <h5 className="card-title">Video Game Suggester</h5>
                      <p className="card-text">
                        Enter your criteria to find video games you might like. The first link
                        is to the deployed application. The one below it is to the repository. I worked
                        on
                        mainly the Javascript and my teammate the CSS and HTML.
                                    </p>
                      <img src="./Assets/VideoGame.PNG" className="margin-between-anchors grow-button"
                        width="100%" height="100%" alt="Weather Report" />
                      <a className="btn btn-secondary btn-lg margin-between-anchors" target="_blank"
                        href="https://mariothompson0010.github.io/Project_1_develop/">Link to deployed
                                        application</a>
                      <a className="btn btn-secondary btn-lg margin-between-anchors" target="_blank"
                        href="https://github.com/MarioThompson0010/Project_1_develop">Link to repository</a>
                      <a className="btn btn-secondary btn-lg margin-between-anchors" target="_blank"
                        href="https://drive.google.com/file/d/1sZQh8cVb6db0vpdou2ocEAte4oA-N5sE/view">
                        If Chicken Coop endpoint is still down, use this link to see product</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="card text-white bg-success mb-3" style="max-width: 18rem;">
                    <div className="card-header">Exemplary Example 3</div>
                    <div className="card-body">
                      <h5 className="card-title">Simple Scheduler</h5>
                      <p className="card-text">
                        Click on the buttons below to see the deployed application. Click the link
                        below that one to see the code.

                                    </p>
                      <img src="./Assets/WorkdayScheduler.PNG" className="margin-between-anchors grow-button"
                        width="100%" height="100%" alt="Weather Report" />
                      <a className="btn btn-secondary btn-lg margin-between-anchors" target="_blank"
                        href="https://mariothompson0010.github.io/05_Workday_Scheduler/Solved/">Link to
                                        deployed application</a>
                      <a className="btn btn-secondary btn-lg" target="_blank"
                        href="https://github.com/MarioThompson0010/05_Workday_Scheduler">Link
                        to
                                        GitHub repository</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="card text-white bg-success mb-3" style="max-width: 18rem;">
                    <div className="card-header">Full Stack!</div>
                    <div className="card-body">
                      <h5 className="card-title">Burger Logger</h5>
                      <p className="card-text">
                        Enter your favorite burgers.  Watch them show up on the left hand side of
                        the screen.  This means they've not yet been eaten.  Eat a burger by
                        clicking on the button DEVOUR!. Watch what happens when you eat a burger.

                                    </p>
                      <img src="./Assets/BurgerLogger.PNG" className="margin-between-anchors grow-button"
                        width="100%" height="100%" alt="Weather Report" />
                      <a className="btn btn-secondary btn-lg margin-between-anchors" target="_blank"
                        href="https://intense-wildwood-42940.herokuapp.com/">Link to
                                        deployed application</a>
                      <a className="btn btn-secondary btn-lg" target="_blank"
                        href="https://github.com/MarioThompson0010/13_Burger_Logger">Link
                        to
                                        GitHub repository</a>
                    </div>
                  </div>
                </div>


                <div className="col-12 col-md-4">
                  <div className="card text-white bg-success mb-3" style="max-width: 18rem;">
                    <div className="card-header">Full Stack Blog!</div>
                    <div className="card-body">
                      <h5 className="card-title">Forum Blog</h5>
                      <p className="card-text">
                        This is a blog forum, similar to Reddit--you can post a comment about a subject
                        and you can also comment on what other people have posted.  Right now,
                        there are three categories: Sports, Books, and Movies.  Enjoy!
                                    </p>
                      <img src="./Assets/Project2.PNG" className="margin-between-anchors grow-button"
                        width="100%" height="100%" alt="Weather Report" />
                      <a className="btn btn-secondary btn-lg margin-between-anchors" target="_blank"
                        href="https://fullstackbc-project-02.herokuapp.com/members">Link to
                                        deployed application</a>
                      <a className="btn btn-secondary btn-lg" target="_blank"
                        href="https://github.com/MarioThompson0010/Project_2">Link
                        to
                                        GitHub repository</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Project>
        </Project>

        {/* <h1 className="text-center">Make New Friends</h1>
        <h3 className="text-center">
          Thumbs up on any pups you'd like to meet!
        </h3>
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
        <h1 className="text-center">
          Made friends with {this.state.matchCount} pups so far!
        </h1>
        <Alert style={{ opacity: this.state.match ? 1 : 0 }} type="success">
          Yay! That Pup Liked You Too!!!
        </Alert> */}
      </div>
    );
  }
}

export default Discover;
