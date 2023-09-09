import "./pagenotfound.scss";
import React from "react";

import ContentWrapper from "../../component/content/ContentWrapper";
const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <ContentWrapper>
        <span className="bigText">404</span>
        <span className="smallText">Page not found!</span>
      </ContentWrapper>
    </div>
  );
};

export default PageNotFound;
