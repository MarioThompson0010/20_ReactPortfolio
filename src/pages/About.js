import React from "react";
import Header from "../components/Header";
import resphot from "../Assets/ResumePhoto.jpg";
import Project from "../components/Project";
import "../../src/index.css";

function About() {
  return (
    <div>
      <Header>
      </Header>

      <Project classguy="view back-image">
        <Project classguy="row ml-4 mt-5">
          <Project classguy="col-12 col-md-8">
            <section>
              <Project classguy="back-card">
                <Project classguy="row mt-5 p-2">
                  <header className="col-12">
                    <h1 className="mt-3">
                      About Me
                      </h1>
                  </header>
                </Project>
                <Project classguy="row p-2">
                  <div className="col-12">
                    <img src={resphot} className="img img-thumbnail float-left mr-3" />
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
                </Project>
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

              </Project>
            </section>
          </Project>
        </Project>
      </Project>
    </div>
  );
}

export default About;
