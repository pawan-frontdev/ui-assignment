import React from "react";

import { Button, Img, Line, Text } from "components";

const CBMLoadingunit = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute flex md:flex-col flex-row gap-3 inset-x-[0] items-center justify-start mx-auto top-[9%] w-[87%]">
          <Text
            className="capitalize font-helvetica text-pink_400"
            as="h4"
            variant="h4"
          >
            {props?.loadingunitmotoOne}
          </Text>
          <Line className="bg-pink_400 h-0.5 mb-[18px] md:mt-0 mt-[9px] w-3/4" />
        </div>
        <Button
          className="absolute flex h-11 items-center justify-center right-[3%] rounded-[50%] top-[4%] w-11"
          size="smIcn"
          variant="icbFillPink400"
        >
          <Img src="images/img_checkmark.svg" alt="checkmark" />
        </Button>
        <Img
          src="images/img_table1png1.png"
          className="absolute bottom-[2%] h-[232px] left-[2%] object-cover w-[27%]"
          alt="table1pngOne"
        />
        <div className="absolute bottom-[10%] flex md:flex-col flex-row gap-[15px] items-center justify-center right-[2%] w-[69%]">
          <Line className="bg-blue_gray_100_01 h-[184px] md:h-px md:w-full w-px" />
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[98%] md:w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-[19%] md:w-full">
              <div className="h-[90px] relative w-full">
                <div className="h-[90px] m-auto w-full">
                  <div className="absolute bg-white_A700 h-[90px] inset-y-[0] my-auto right-[0] rounded-[10px] shadow-bs2 w-[94%]"></div>
                  <Img
                    src="images/img_hottemperature.svg"
                    className="absolute h-[69px] inset-y-[0] left-[0] my-auto w-[69px]"
                    alt="hottemperature"
                  />
                </div>
                <Text
                  className="absolute bottom-[28%] capitalize font-helvetica right-[13%] text-gray_600_01"
                  as="h3"
                  variant="h3"
                >
                  {props?.temperature}
                </Text>
              </div>
              <Text
                className="capitalize font-helvetica font-light text-gray_600_01"
                as="h5"
                variant="h5"
              >
                {props?.tempratureOne}
              </Text>
            </div>
            <div className="flex flex-col gap-[15px] items-center justify-start w-[18%] md:w-full">
              <div className="bg-white_A700 flex flex-row items-center justify-start pr-3 py-3 rounded-[10px] shadow-bs2 w-full">
                <Img
                  src="images/img_audiowaves.svg"
                  className="h-[65px] w-[65px]"
                  alt="audiowaves"
                />
                <Text
                  className="capitalize font-helvetica text-gray_600_01"
                  as="h3"
                  variant="h3"
                >
                  {props?.twentyfive}
                </Text>
              </div>
              <Text
                className="capitalize font-helvetica font-light text-gray_600_01"
                as="h5"
                variant="h5"
              >
                {props?.vibration}
              </Text>
            </div>
            <div className="flex flex-col gap-[15px] items-center justify-start w-[18%] md:w-full">
              <div className="bg-white_A700 flex flex-row gap-[13px] items-center justify-start p-0.5 rounded-[10px] shadow-bs2 w-full">
                <Img
                  src="images/img_current.svg"
                  className="h-[58px] my-3.5"
                  alt="current"
                />
                <Text
                  className="capitalize font-helvetica text-gray_600_01"
                  as="h3"
                  variant="h3"
                >
                  {props?.acounter}
                </Text>
              </div>
              <Text
                className="capitalize font-helvetica font-light text-gray_600_01"
                as="h5"
                variant="h5"
              >
                {props?.currentOne}
              </Text>
            </div>
            <div className="flex flex-col gap-[15px] items-center justify-start w-[18%] md:w-full">
              <div className="md:h-[89px] h-[90px] relative w-full">
                <div className="absolute bg-white_A700 flex flex-col h-full inset-[0] items-end justify-center m-auto p-[19px] rounded-[10px] shadow-bs2">
                  <Text
                    className="capitalize font-helvetica mb-1.5 mt-2.5 text-gray_600_01"
                    as="h3"
                    variant="h3"
                  >
                    {props?.vcounter}
                  </Text>
                </div>
                <Img
                  src="images/img_voltage.svg"
                  className="absolute h-[51px] inset-y-[0] left-[0] my-auto w-[51px]"
                  alt="voltage"
                />
              </div>
              <Text
                className="capitalize font-helvetica font-light text-gray_600_01"
                as="h5"
                variant="h5"
              >
                {props?.voltageOne}
              </Text>
            </div>
            <div className="flex flex-col gap-[15px] items-center justify-start w-[19%] md:w-full">
              <div className="md:h-[89px] h-[90px] relative w-full">
                <div className="absolute bg-white_A700 flex flex-col h-full inset-[0] items-end justify-center m-auto p-[7px] rounded-[10px] shadow-bs2">
                  <Text
                    className="capitalize font-helvetica mb-[18px] mt-[22px] text-gray_600_01"
                    as="h3"
                    variant="h3"
                  >
                    {props?.p150w}
                  </Text>
                </div>
                <Img
                  src="images/img_lightbulb.svg"
                  className="absolute h-[71px] inset-y-[0] left-[0] my-auto"
                  alt="lightbulb"
                />
              </div>
              <Text
                className="capitalize font-helvetica font-light text-gray_600_01"
                as="h5"
                variant="h5"
              >
                {props?.wattage}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

CBMLoadingunit.defaultProps = {
  loadingunitmotoOne: "Loading Unit Motor",
  temperature: "53°C",
  tempratureOne: "Temprature",
  twentyfive: "2.5°",
  vibration: "Vibration",
  acounter: "6 A",
  currentOne: "Current",
  vcounter: "24 V",
  voltageOne: "Voltage",
  p150w: "150W",
  wattage: "Wattage",
};

export default CBMLoadingunit;
