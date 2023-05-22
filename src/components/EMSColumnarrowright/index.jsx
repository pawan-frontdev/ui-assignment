import React from "react";

import { Img } from "components";

const EMSColumnarrowright = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_arrowright.svg"
          className="h-9 mr-[11px]"
          alt="arrowright"
        />
      </div>
    </>
  );
};

EMSColumnarrowright.defaultProps = {};

export default EMSColumnarrowright;
