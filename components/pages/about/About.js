import React from "react";
import { Card, Col, Progress, Row } from "antd";
import PageHeader from "../../pageHeader/PageHeader";
import "./about.scss";

const About = () => {
  const personalInfo = [
    {
      title: "first name",
      value: "Steve",
    },
    {
      title: "last name",
      value: "Milner",
    },
    {
      title: "Age",
      value: "27 Years",
    },
    {
      title: "Nationality",
      value: "Tunisian",
    },
    {
      title: "Freelance",
      value: "Available",
    },
    {
      title: "Address",
      value: "Tunis",
    },
    {
      title: "phone",
      value: "+21621184010",
    },
    {
      title: "Email",
      value: "you@mail.com",
    },
    {
      title: "Skype",
      value: "steve.milner",
    },
    {
      title: "langages",
      value: "French, English",
    },
  ];

  const aboutDetails = [
    {
      count: 5,
      title: "YEARS OF EXPERIENCE"
    },
    {
      count: 40,
      title: "COMPLETED PROJECTS"
    },
    {
      count: 10,
      title: "HAPPY CUSTOMERS"
    },
    {
      count: 7,
      title: "AWARDS WON"
    }
  ]

  const skills = [
    {
      name: "HTML",
      progress: 90,
    },
    {
      name: "CSS",
      progress: 70,
    },
    {
      name: "JAVASCRIPT",
      progress: 70,
    },
    {
      name: "TYPESCRIPT",
      progress: 50,
    },
    {
      name: "REACT JS",
      progress: 95,
    },
    {
      name: "NEXT JS",
      progress: 60,
    },
  ]
  const twoColors = {
    '0%': "#ffb400",
    '100%': "#ffb400",
  };
  return (
    <div>
      <div className="container">
        <PageHeader title={"About"} ColoredTitle={"Me"} bgTitle={"About"} />
        <Row gutter={[20, 30]}>
          <Col xl={12} lg={12} xs={24}>
            <h3 className="custom-title">personal infos</h3>
            <ul className="about-list">
              {personalInfo?.map((item, index) => (
                <li key={index}>
                  <span className="title">{item.title}:</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Col>
          <Col xl={12} lg={12} xs={24}>
            <Row gutter={[30, 30]}>
              {aboutDetails?.map((item, index) => (
                <Col xs={12} key={index}>
                  <Card className="personal-details-card">
                    <h2>{item.count}</h2>
                    <p>{item.title}</p>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
      <div className="my-skills-wrapper">
        <div className="container">
          <h3 className="custom-title text-center">MY SKILLS</h3>
          <Row gutter={[30, 40]} justify={"center"}>
            {skills?.map((skill, index) => (
              <Col lg={6} md={8} xs={12} key={index} className="skill-warp text-center">
                <Progress type="circle" percent={skill.progress} strokeColor={twoColors} className="skill-progress-wrap" />
                <h3>{skill.name}</h3>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default About;
