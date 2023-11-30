import React from "react";
import "./home.scss";
import { Col, Row } from "antd";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <div className="color-block"></div>
      <Row align={"middle"} className="home-details-wrapper">
        <Col lg={8} xs={24}>
          <div
            className="image-wraper"
            style={{ backgroundImage: "url(/assets/portrait.jpg)" }}
          ></div>
        </Col>
        <Col lg={16} xs={24}>
          <div className="home-details">
            <h1>
              h1. Ant Design <span>h1. Ant Design</span>
            </h1>
            <p>
              I'm a Tunisian based web designer & front-end developer focused on
              crafting clean & user-friendly experiences, I am passionate about
              building excellent software that improves the lives of those
              around me.
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
