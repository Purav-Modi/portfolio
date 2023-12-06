import React from "react";
import "./pageHeader.scss";
const PageHeader = ({ title, ColoredTitle, bgTitle }) => {
  return (
    <div>
      <div class="title-section">
        <h1>
          {title} <span>{ColoredTitle}</span>
        </h1>
        <span class="title-bg">{bgTitle}</span>
      </div>
    </div>
  );
};

export default PageHeader;
