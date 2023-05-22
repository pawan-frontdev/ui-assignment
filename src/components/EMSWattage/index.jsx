import React from "react";

import { Img, Line, Text } from "components";

const EMSWattage = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[5px] justify-start mt-0.5 w-[87%] md:w-full">
          <div className="flex flex-row items-start justify-evenly w-full">
            <div className="flex flex-col gap-1.5 items-start justify-start mt-[39px] w-[3%]">
              <Line className="bg-blue_gray_100 h-6 ml-1 md:ml-[0] w-px" />
              <Text
                className="font-helvetica rotate-[90deg] text-center text-gray_500 w-full"
                as="h1"
                variant="h1"
              >
                {props?.wattage}
              </Text>
            </div>
            <div className="h-[124px] relative w-[96%]">
              <Text
                className="font-helvetica mb-[-6.88px] mx-auto text-center text-gray_600 z-[1]"
                variant="body1"
              >
                {props?.wattageconsumptOne}
              </Text>
              <Img
                src="images/img_graphchart_gray_800.png"
                className="h-[114px] mt-auto mx-auto object-cover"
                alt="graphchart_Two"
              />
            </div>
          </div>
          <div className="flex flex-row gap-[5px] items-start justify-end md:ml-[0] ml-[119px] w-1/5 md:w-full">
            <Text
              className="font-helvetica text-center text-gray_500"
              as="h1"
              variant="h1"
            >
              {props?.timeTwo}
            </Text>
            <Img
              src="images/img_arrow1.svg"
              className="h-px mt-1"
              alt="arrowOne_Two"
            />
          </div>
        </div>
      </div>
    </>
  );
};

EMSWattage.defaultProps = {
  wattage: "Wattage",
  wattageconsumptOne: "Wattage Consumption",
  timeTwo: "Time",
};

export default EMSWattage;
