
import React, { Component } from "react";
import Header from "../components/Header";
import Project from "../components/Project";
import Card from "../components/Card";
import "../../src/index.css";

import assetWeather from "../Assets/ScreenshotWeather.PNG";
import assetVid from "../Assets/VideoGame.PNG";
import assetWorkday from "../Assets/WorkdayScheduler.PNG";
import assetResume from "../Assets/Thompson_Mario_Resume.pdf"
import assetProject2 from "../Assets/Project2.PNG";


class Portfolio extends Component {
  state = {
  };

  render() {
    return (
      <div>
        <Header>
        </Header>

        <Project classguy="row mt-5 justify-content-center background-guy">
          <Project classguy="col-12">
            <section>
              <Project classguy="row">
                <Project classguy="col-12">
                  <h2>
                    Portfolio
                            </h2>
                </Project>
              </Project>
            </section>
            <section>
              <Project classguy="row">
                <Card
                  cardHeader="Social Media"
                  title="My LinkedIn Profile"
                  cardText="Click on the LinkedIn button to see my LinkedIn Profile"
                  url="https://www.linkedin.com/in/mario-thompson-991b8486/"
                  description="Click to see my LinkedIn Profile!"
                >
                </Card>

                <Card
                  cardHeader="Github"
                  title="See my GitHub Profile"
                  cardText="See my GitHub Profile"
                  url="https://github.com/MarioThompson0010"
                  description="Click the link to see my GitHub Profile and several
                  links to coding examples"
                >
                </Card>

                <Card
                  cardHeader="Resume"
                  title="Download Resume in PDF"
                  cardText="Click on the button to see my resume."
                  url={assetResume}
                  description="Link to my resume"
                >
                </Card>
              </Project>
              <Project classguy="row">
                <Card
                  cardHeader="Exemplary Example 1"
                  title="Weather Tracker"
                  cardText="Click on the buttons below to see the deployed application. Click the link
                  below that one to see the code."
                  url="https://mariothompson0010.github.io/06_Weather_Teller/"
                  description="Link to deployed application"
                  img={assetWeather}
                >

                  <a style={{ marginTop: 4 }} className="btn btn-secondary btn-lg" target="_blank"
                    href="https://github.com/MarioThompson0010/06_Weather_Teller">Link
                    to
                                        GitHub repository</a>
                </Card>

                <Card
                  cardHeader="Exemplary Example 2"
                  title="Video Game Suggester"
                  cardText="Enter your criteria to find video games you might like. The first link
                  is to the deployed application. The one below it is to the repository. I worked
                  on
                  mainly the Javascript and my teammate the CSS and HTML."
                  url="https://mariothompson0010.github.io/Project_1_develop/"
                  description="Link to deployed application"
                  img={assetVid}
                >

                  <a className="btn btn-secondary btn-lg margin-between-anchors" style={{ marginTop: 5 }} target="_blank"
                    href="https://github.com/MarioThompson0010/Project_1_develop">Link to repository</a>
                  <a className="btn btn-secondary btn-lg margin-between-anchors" target="_blank" style={{ marginTop: 5 }}
                    href="https://drive.google.com/file/d/1sZQh8cVb6db0vpdou2ocEAte4oA-N5sE/view">
                    If Chicken Coop endpoint is still down, use this link to see product</a>
                </Card>



                <Card
                  cardHeader="Exemplary Example 3"
                  title="Forum Blog"
                  cardText="This is a blog forum, similar to Reddit--you can post a comment about a subject
                                        and you can also comment on what other people have posted.  Right now,
                                        there are three categories: Sports, Books, and Movies.  Enjoy!"
                  url="https://fullstackbc-project-02.herokuapp.com/members"
                  description="Link to deployed application"
                  img={assetProject2}
                >
                  <a class="btn btn-secondary btn-lg" target="_blank"
                    href="https://github.com/MarioThompson0010/Project_2">Link
                    to
                                                         GitHub repository</a>
                </Card>
              </Project>
            </section>
          </Project>
        </Project>

      </div>
    );
  }
}

export default Portfolio;
