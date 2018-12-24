import React, { Component } from "react";
import GoodTunes from "./apps/goodtunes";

class Apps extends Component {
  largest = {
    fontFamily: "Garamond",
    fontSize: "200%",
    fontWeight: "bold",
    textAlign: "center"
  };
  larger = {
    fontFamily: "Garamond",
    fontSize: "150%",
    fontWeight: "bold",
    textAlign: "center"
  };
  large = {
    fontFamily: "Garamond",
    fontSize: "125%",
    fontWeight: "bold",
    color: "brown"
  };
  medium = {
    fontFamily: "Garamond",
    fontSize: "125%",
    fontWeight: "bold",
    letterSpacing: ".5px"
    // color: "brown"
  };

  details = [
    {
      object:
        "To be part of a team that works with a relevant tech stack and values learning and collaboration.",
      front_skills: ["Bootstrap", "Materialize", "React", "JQuery"],
      back_skills: [
        "Node.JS",
        "Express",
        "Django",
        "Passport.JS",
        "RESTful APIs"
      ],
      databases: ["MongoDB", "SQL", "Firebase"],
      languages: ["Javscript", "Perl", "Python"],
      personal: [
        "Being outdoors",
        "playing musical instruments",
        "exploring speculative fiction"
      ]
    },
    [
      {
        pgm: "Full-Stack Development",
        time: 2017,
        school: "UNC Coding Bootcamp",
        desc:
          "Both individually and as part of teams, we created apps that used the Mongo/Express/React/Node stack.   In this, we variously applied CSS frameworks, authentication middleware, SQL, JQuery, & Git. "
      },
      {
        pgm: "Cultural Studies / Critical Theory & Analysis, M.A.",
        time: 2002,
        school: "East Carolina University",
        desc:
          "We used a range of analytical methods from various disciplines to study the ways in which cultural forms interact with individual and communal experience."
      }
    ],
    [
      {
        pgm: "Tutor/Teaching Assistant",
        com: "Trilogy Education",
        where: "Raleigh-Durham, NC",
        when: "Jun 2018 - present",
        desc: [
          "We work with adult students, guiding inquiry, emphasizing meta-skills and core concepts of software engineering, and providing support and feedback as they create a range of apps using the Mongo/Express/React/Node stack.  Along side these, we spend time on jQuery, MySQL, Git, Javascript, and Algorithms.  "
        ]
      },
      {
        pgm: "Full-stack Developer",
        com: "BizOps Group, AT&T",
        where: "Durham, NC",
        when: "Sep 2017- May 2018",
        desc: [
          "As part of a 10-person agile team, we worked on a high-profile internal web-based client/resource management tool",
          "enhanced a range of front-end (JS/JQuery) and back-end (Perl, SQL, APIs) functionality, ",
          "Used Jira tracking software and the Source Tree Git GUI",
          "Wrote unit, integration, and beta tests as well as documentation, and ",
          "Participated in daily stand up meetings as well as regular code reviews."
        ]
      },
      {
        pgm: "Writing Instructor",
        com: [
          "Durham Tech Community College, NC State, Center for Nature, Education, and the Imagination"
        ],
        where: "Durham, Raleigh, Greensboro NC",
        when: "Aug 2002 - May 2017",
        desc: [
          "Designed and taught courses in analytical, imaginative, and research techniques.",
          "Used a range of adult learning strategies as well as software platforms, such as Sakai and Blackboard.",
          "Monitored and evaluated progress in a fair and consistent manner."
        ]
      }
    ],
    [
      {
        pgm: "RDU Python",
        where: "RDU, NC",
        when: "Aug 2018 - present",
        desc:
          "Each week, we explore a new topic in the field of Python programming"
      },
      {
        pgm: "Code for Durham",
        where: "Durham, NC",
        when: "Aug 2017- May 2018",
        desc:
          "This small group of volunteers explore how apps can help organize data and stories in a way that informs the community on the issues surrounding affordable housing.  (Django, PostgreSQL, D3)"
      },
      {
        pgm: "PRESS study",
        where: "Durham Tech Community College",
        when: "Aug 2014 - Aug 2016",
        desc:
          "In this two-year study, we analyzed course data and issues about equity and policy in order to implementstrategies that enable higher rates of student success. We presented findings to staff and faculty."
      }
    ]
  ];

  render() {
    const [intro, ed, work, volunteer] = this.details;
    // const [ed1, ed2] = ed
    console.log(ed[1]);
    var bold = { fontWeight: "bold" };

    return (
      <div className="container">
        <div className="row">
          <h6 style={this.largest}> Mel DeJesus </h6>
          <h6 style={this.larger}> 919-220-8424 </h6>
          <hr />
          <div>
            <p>
              {" "}
              <span style={bold}>OBJECTIVE:</span> {intro.object}
            </p>
            <hr />
            <p style={this.large}> SKILLS: </p>
            <p>
              {" "}
              <span style={bold}>Languages:</span> {intro.languages.join(", ")}
            </p>
            <p>
              {" "}
              <span style={bold}>Front-end:</span>{" "}
              {intro.front_skills.join(", ")}
            </p>
            <p>
              {" "}
              <span style={bold}>Back-end:</span> {intro.back_skills.join(", ")}
            </p>
            <p>
              {" "}
              <span style={bold}>Databases:</span> {intro.databases.join(", ")}
            </p>
            <p>
              {" "}
              <span style={bold}>Personal:</span> {intro.personal.join(", ")}
            </p>
            <hr />
            <p style={this.large}> EDUCATION: </p>
            {ed.map(e => (
              <div>
                <p style={this.medium}>
                  {" "}
                  {e.pgm}, {e.time}, {e.school}
                </p>
                <p> {e.desc} </p>
              </div>
            ))}
            <hr />
            <p style={this.large}> WORK: </p>
            {work.map(e => (
              <div>
                <p style={this.medium}>
                  {e.pgm} -- {e.where}, {e.when}
                </p>
                {e.desc.map(f => (
                  <div>
                    <li>{f}</li>
                  </div>
                ))}
              </div>
            ))}
            <hr />
            <p style={this.large}> VOLUNTEER: </p>
            {volunteer.map(e => (
              <div>
                <p style={this.medium}>
                  {e.pgm}: {e.where}, {e.when}{" "}
                </p>
                <p> {e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Apps;
