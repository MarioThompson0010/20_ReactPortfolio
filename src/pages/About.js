import React from "react";
//import Hero from "../components/Hero";
import Header from "../components/Header";
import Project from "../components/Project";
// import Row from "../components/Row";
// import Col from "../components/Col";
import "../../src/index.css";

function About() {
  return (
    <div>
      <Header>

      </Header>

      <Project classguy="background-image: url('lightbackground.jpg'); background-repeat: no-repeat; background-size: cover; background-position: center center;">



        <Project classguy="row ml-4 mt-5">
          <div className="col-12 col-md-8">
            <section>
              <div style="background-color: white;">
                <div className="row mt-5 p-2">

                  <header className="col-12">
                    <h1 className="mt-3">
                      About Me
                                </h1>
                  </header>
                </div>
                <div className="row p-2">
                  <div className="col-12">
                    <img src="ResumePhoto.jpg" className="img img-thumbnail float-left mr-3"
                      alt="Photo of Mario Thompson" />

                    <p>
                      Having just finished a little stint as an enlisted guy in the Army,
                      I began my Computer Science career in earnest. I had a great job at DHI
                      Computing Services, where I worked for the best managers ever: Mark Benson, Dave
                      Harris, Jessie Jarman, etc. They also were some of the most brilliant people I've
                      ever
                      known. Then, like losing the ring (from Lord of the Ring) something unexpected
                      happened. In any case, I felt compelled to relocate to Kansas City to meet the
                      emergency. What
                      enabled me to live here is Cerner. They have a great health care
                      package, and plenty of work--you will never be bored if you work for them, and that
                      was
                      great. After that, I jumped on the GDIT ship. Again, great people, great
                      company. So, I have
                      approximately spent the following years in each skill, respectively: C# 4; Assembly
                      4; C++ 2; SQL
                      and Javascript 1.
                      </p>
                    <p>
                      I just got hired by The Great Plains Laboratory! I love it!
                    </p>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col-md-12">
                    <p>
                      I got a job with a great company. However, it has
                      been great being a part-time student in the Full Stack course. I love it. The
                      instructors are seemingly omni-present, as they answer questions at all times of the
                      day. They are knowledgeable, great communicators, patient, and also efficient, at
                      the same time.
                      Anybody who takes this course will be prepared to be a Full Stack developer.
                                </p>
                  </div>
                </div>

              </div>
            </section>
          </div>
        </Project>





      </Project>

    </div>
  );
}

export default About;
