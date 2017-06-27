import React, { Component } from 'react';
import Header from '../Header/Header';
import './About.css';

class About extends Component {
  render() {
    var projects = [
      {
        title: "Timer",
        description: "For this task I used: Bootstrap, JavaScript, jQuery",
        link: "https://github.com/johnnyignatov/johnnyignatov.github.io/tree/master/JavaScript_5-6"
      },
      {
        title: "Test for Frontend beginers",
        description: "For this task I used: Bootstrap, JavaScript, jQuery",
        link: "https://github.com/johnnyignatov/johnnyignatov.github.io/tree/master/JavaScript_3-4"
      },
      {
        title: "Searcher",
        description: "For this task I used: Facebook API, Pixabey API, Bootstrap, JavaScript, Gulp",
        link: "https://github.com/johnnyignatov/johnnyignatov.github.io/tree/master/JavaScript_15-16"
      },
      {
        title: "User cards",
        description: "For this task I used: Handlebars, Bootstrap, JavaScript, jQuery",
        link: "https://github.com/johnnyignatov/johnnyignatov.github.io/tree/master/JavaScript_11-12"
      },
      {
        title: "Tabs and Form",
        description: "For this task I used: Handlebars, Bootstrap, JavaScript, jQuery",
        link: "https://github.com/johnnyignatov/johnnyignatov.github.io/tree/master/JavaScript_7-8"
      },
    ]
    return (
      <div className="About">
        <Header />
        <div className="content">
          <h1 className="heading">My projects</h1>
            {projects.map(function (item) {
              return (
                <div key={item.title} className="projects">
                  <a className="projects-link" href={item.link}>
                    {item.title}
                    <p className="projects-description">{item.description}</p>
                  </a>

                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default About;
