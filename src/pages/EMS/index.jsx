import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";
import EMSColumnarrowright from "components/EMSColumnarrowright";
import EMSCurrent from "components/EMSCurrent";
import EMSVoltage from "components/EMSVoltage";
import EMSWattage from "components/EMSWattage";
import HomeScreenColumnposts from "components/HomeScreenColumnposts";
import { useNavigate } from "react-router-dom";

const EMSPage = () => {
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      label: (
        <Button
          className="flex items-center justify-center text-white_A700 w-[58px]"
          size="mdIcn"
        >
          <Img src="images/img_menu.svg" alt="menu" />
        </Button>
      ),
    },
    {
      label: (
        <Img
          src="images/img_lock.svg"
          className="h-10 mb-2.5 w-[41px]"
          alt="lock"
        />
      ),
    },
    {
      label: <Img src="images/img_call.svg" className="h-[52px]" alt="call" 
      onClick={() => {navigate('/ems')}}
      />,
    },
  ];
  const sideBarMenu1 = [
    {
      label: (
        <Img
          src="images/img_reply.svg"
          className="h-[41px] mb-2.5 w-[41px]"
          alt="reply"
        />
      ),
    },
    {
      label: (
        <Img
          src="images/img_group.svg"
          className="h-[41px] mb-2.5 w-[41px]"
          alt="group"
        />
      ),
    },
    {
      label: (
        <Img
          src="images/img_warning.svg"
          className="h-[41px] mb-2.5 w-[41px]"
          alt="warning"
        />
      ),
    },
    {
      label: (
        <Img
          src="images/img_trash.svg"
          className="h-[42px] mb-[9px] w-[41px]"
          alt="trash"
        />
      ),
    },
    {
      label: (
        <Img
          src="images/img_globe.svg"
          className="h-[41px] mb-[11px] w-[41px]"
          alt="globe"
        />
      ),
    },
  ];

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-helvetica items-center justify-end mx-auto p-[29px] sm:px-5 w-full">
        <div className="bg-gray_100 h-[959px] md:h-[966px] mt-[7px] mx-auto pr-[33px] md:px-5 relative rounded-[54px] w-full">
          <div className="absolute flex inset-[0] justify-center m-auto w-[98%] md:w-full">
            <Sidebar className="!sticky !w-[143px] bg-pink_400 flex h-screen md:hidden justify-start my-auto overflow-auto rounded-[54px] top-[0]">
              <div className="h-[959px] relative w-full">
                <div className="absolute bg-pink_400 h-[959px] inset-y-[0] left-[0] my-auto rounded-[54px] w-4/5"></div>
                <EMSColumnarrowright className="absolute bg-gray_800 flex flex-col items-end justify-end p-[13px] right-[0] rounded-[20px] top-[27%] sm:w-full" />
              </div>
              <Menu
                menuItemStyles={{
                  button: {
                    padding: 0,
                    "flex-direction": "column",
                    "padding-bottom": "6px",
                    "border-radius": "10px",
                    "padding-left": "6px",
                    "padding-right": "6px",
                    [`&:hover, &.ps-active`]: {
                      color: "#bc4772",
                      "background-color": "#ffffffff !important",
                    },
                  },
                }}
                className="flex flex-col items-center justify-start mb-[157px] mt-[53px] pl-7 md:pr-10 pr-[57px] sm:px-5 w-[41%]"
              >
                <div className="flex flex-col gap-10 items-center justify-start w-full">
                  {sideBarMenu?.map((menu, i) => (
                    <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                      {menu.label}
                    </MenuItem>
                  ))}
                </div>
                <div className="flex flex-col gap-10 items-center justify-end mt-[55px] w-full">
                  {sideBarMenu1?.map((menu, i) => (
                    <MenuItem key={`sideBarMenu1Item${i}`} {...menu}>
                      {menu.label}
                    </MenuItem>
                  ))}
                </div>
              </Menu>
              <Img
                src="images/img_close.svg"
                className="h-[41px] mb-[60px] ml-[45px] mr-[71px] mt-[858px]"
                alt="close"
              />
            </Sidebar>
            <div className="flex flex-col items-center justify-start ml-[-4px] mt-[59px] z-[1]">
              <Text className="text-center text-gray_800" as="h2" variant="h2">
                Energy Monitoring System
              </Text>
            </div>
            <List
              className="flex-col gap-[27px] grid mb-[27px] ml-[undefinedpx] mr-[11px] mt-auto w-[87%] z-[1]"
              orientation="vertical"
            >
              <div className="bg-gray_50 flex flex-col items-center justify-end p-[22px] sm:px-5 rounded-[44px] shadow-bs1 w-full">
                <div className="flex flex-col gap-3.5 items-center justify-start w-[98%] md:w-full">
                  <div className="flex md:flex-col flex-row gap-[13px] items-center justify-between w-[97%] md:w-full">
                    <Text
                      className="capitalize text-pink_400"
                      as="h4"
                      variant="h4"
                    >
                      Loading Unit
                    </Text>
                    <Line className="bg-pink_400 h-0.5 mb-[17px] md:mt-0 mt-2.5 w-[84%]" />
                  </div>
                  <div className="gap-[25px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                    <EMSCurrent
                      className="bg-white_A700 flex flex-1 flex-col items-center justify-end p-2.5 rounded-[25px] shadow-bs w-full"
                      current="Current"
                      currentconsumptOne="Current Consumption"
                      time="Time"
                    />
                    <EMSVoltage
                      className="bg-white_A700 flex flex-1 flex-col items-center justify-end p-2.5 rounded-[25px] shadow-bs w-full"
                      voltage="Voltage"
                      voltageconsumptOne="Voltage Consumption"
                      timeOne="Time"
                    />
                    <EMSWattage
                      className="bg-white_A700 flex flex-1 flex-col items-center justify-end p-2.5 rounded-[25px] shadow-bs w-full"
                      wattage="Wattage"
                      wattageconsumptOne="Wattage Consumption"
                      timeTwo="Time"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray_50 flex flex-col items-center justify-end p-[22px] sm:px-5 rounded-[44px] shadow-bs1 w-full">
                <div className="flex flex-col gap-3.5 items-center justify-start w-[98%] md:w-full">
                  <div className="flex md:flex-col flex-row gap-[38px] items-center justify-between w-[97%] md:w-full">
                    <Text
                      className="capitalize text-pink_400"
                      as="h4"
                      variant="h4"
                    >
                      Filling Unit
                    </Text>
                    <Line className="bg-pink_400 h-0.5 mb-[17px] md:mt-0 mt-2.5 w-[84%]" />
                  </div>
                  <div className="gap-[25px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                    <EMSCurrent
                      className="bg-white_A700 flex flex-1 flex-col items-center justify-end p-2.5 rounded-[25px] shadow-bs w-full"
                      current="Current"
                      currentconsumptOne="Current Consumption"
                      time="Time"
                    />
                    <EMSVoltage
                      className="bg-white_A700 flex flex-1 flex-col items-center justify-end p-2.5 rounded-[25px] shadow-bs w-full"
                      voltage="Voltage"
                      voltageconsumptOne="Voltage Consumption"
                      timeOne="Time"
                    />
                    <EMSWattage
                      className="bg-white_A700 flex flex-1 flex-col items-center justify-end p-2.5 rounded-[25px] shadow-bs w-full"
                      wattage="Wattage"
                      wattageconsumptOne="Wattage Consumption"
                      timeTwo="Time"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray_50 flex flex-col items-center justify-start p-[23px] sm:px-5 rounded-[44px] shadow-bs1 w-full">
                <div className="flex flex-col gap-3 items-center justify-start w-[98%] md:w-full">
                  <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-[98%] md:w-full">
                    <Text
                      className="capitalize text-pink_400"
                      as="h4"
                      variant="h4"
                    >
                      Dispatch Unit
                    </Text>
                    <Line className="bg-pink_400 h-0.5 mb-[17px] md:mt-0 mt-2.5 w-[83%]" />
                  </div>
                  <div className="gap-[25px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                    <EMSCurrent
                      className="bg-white_A700 flex flex-1 flex-col items-center justify-end p-2.5 rounded-[25px] shadow-bs w-full"
                      current="Current"
                      currentconsumptOne="Current Consumption"
                      time="Time"
                    />
                    <EMSVoltage
                      className="bg-white_A700 flex flex-1 flex-col items-center justify-end p-2.5 rounded-[25px] shadow-bs w-full"
                      voltage="Voltage"
                      voltageconsumptOne="Voltage Consumption"
                      timeOne="Time"
                    />
                    <EMSWattage
                      className="bg-white_A700 flex flex-1 flex-col items-center justify-end p-2.5 rounded-[25px] shadow-bs w-full"
                      wattage="Wattage"
                      wattageconsumptOne="Wattage Consumption"
                      timeTwo="Time"
                    />
                  </div>
                </div>
              </div>
            </List>
            <HomeScreenColumnposts className="flex flex-col items-center justify-start ml-[undefinedpx] mt-[21px] sm:w-full z-[1]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default EMSPage;
