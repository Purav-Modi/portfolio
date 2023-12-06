import React from "react";
import { Col, Row } from "antd";
import "./about.scss";
import PageHeader from "../../pageHeader/PageHeader";

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
  return (
    <div>
      <div className="container">
        <PageHeader title={"About"} ColoredTitle={"Me"} bgTitle={"About"} />
        <Row>
          <Col xl={12} lg={9} xs={24}>
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
          <Col xl={12} lg={15} xs={24}>
            dfg
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
