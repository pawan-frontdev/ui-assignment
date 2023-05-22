import React from "react";

import { List, Text } from "components";
import CBMDispatchunit from "components/CBMDispatchunit";
import CBMFillingunit from "components/CBMFillingunit";
import CBMLoadingunit from "components/CBMLoadingunit";
import CBMMenuitems from "components/CBMMenuitems";
import EMSColumnarrowright from "components/EMSColumnarrowright";
import HomeScreenColumnposts from "components/HomeScreenColumnposts";

const CBMPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-helvetica items-center justify-end mx-auto p-[27px] sm:px-5 w-full">
        <div className="bg-gray_100 flex flex-col items-center justify-start max-w-[1355px] mt-[9px] mx-auto md:px-5 rounded-[54px] w-full">
          <div className="flex flex-col items-center justify-start w-[98%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
              <div className="h-[2021px] relative w-[11%] md:w-full">
                <div className="h-[2021px] m-auto w-full">
                  <div className="absolute bg-pink_400 h-[2021px] inset-y-[0] left-[0] my-auto rounded-[54px] w-[82%]"></div>
                  <EMSColumnarrowright className="absolute bg-gray_800 flex flex-col items-end justify-end p-[13px] right-[0] rounded-[20px] top-[18%] sm:w-full" />
                </div>
                <CBMMenuitems className="absolute flex flex-col items-center justify-start left-[20%] top-[2%] sm:w-full" />
              </div>
              <div className="flex md:flex-1 flex-col gap-[25px] items-center justify-start md:mt-0 mt-[21px] w-[90%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex flex-col items-center justify-start md:mt-0 mt-10">
                    <Text
                      className="text-center text-gray_800"
                      as="h2"
                      variant="h2"
                    >
                      Condition Based Monitoring
                    </Text>
                  </div>
                  <HomeScreenColumnposts className="flex sm:flex-1 flex-col items-center justify-start mb-9 sm:w-full" />
                </div>
                <List
                  className="flex-col gap-[51px] grid items-start px-4 py-6 w-auto md:w-full"
                  orientation="vertical"
                >
                  <CBMLoadingunit
                    className="bg-gray_50 h-[282px] my-0 p-1.5 relative rounded-[44px] shadow-bs1 w-full"
                    loadingunitmotoOne="Loading Unit Motor"
                    temperature="53°C"
                    tempratureOne="Temprature"
                    twentyfive="2.5°"
                    vibration="Vibration"
                    acounter="6 A"
                    currentOne="Current"
                    vcounter="24 V"
                    voltageOne="Voltage"
                    p150w="150W"
                    wattage="Wattage"
                  />
                  <CBMFillingunit
                    className="bg-gray_50 h-[282px] my-0 p-2 relative rounded-[44px] shadow-bs1 w-full"
                    temperature="53°C"
                    tempratureOne="Temprature"
                    twentyfive="2.5°"
                    vibration="Vibration"
                    acounter="6 A"
                    currentOne="Current"
                    vcounter="24 V"
                    voltageOne="Voltage"
                    p150w="150W"
                    wattage="Wattage"
                    fillingunitmotoOne="Filling Unit Motor"
                  />
                  <CBMDispatchunit
                    className="bg-gray_50 h-[282px] my-0 p-1.5 relative rounded-[44px] shadow-bs1 w-full"
                    temperature="53°C"
                    tempratureOne="Temprature"
                    twentyfive="2.5°"
                    vibration="Vibration"
                    acounter="6 A"
                    currentOne="Current"
                    vcounter="24 V"
                    voltageOne="Voltage"
                    p150w="150W"
                    wattage="Wattage"
                    dispatchunitmotOne="Dispatch Unit Motor"
                  />
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CBMPage;
