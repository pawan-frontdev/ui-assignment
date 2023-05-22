import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, Text } from "components";
import HomeScreenColumnarrowright from "components/HomeScreenColumnarrowright";
import HomeScreenColumnposts from "components/HomeScreenColumnposts";
import './index.css';
import { useNavigate } from "react-router-dom";

const HomeScreenPage = () => {
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
        <div className="bg-gray_100 flex flex-row items-center justify-start mt-[7px] mx-auto pr-[33px] md:px-5 rounded-[54px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="flex relative w-[36%] md:w-full">
              <Sidebar className="!sticky !w-32 sidebar-margin-right bg-pink_400 flex h-screen md:hidden justify-start my-auto overflow-auto rounded-[54px] top-[0]">
                <div className="bg-pink_400 h-[959px] mr-[31px] rounded-[54px] w-[79%]"></div>
                <HomeScreenColumnarrowright className="bg-gray_800 flex flex-col items-end justify-end ml-3.5 mt-[58px] p-[13px] rounded-[20px] sm:w-full" />
                {/* <Img
                  src="images/img_arrowright.svg"
                  className="h-9 mr-[11px]"
                  alt="arrowright_One"
                /> */}
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
                  className="flex flex-col items-center justify-start mb-[45px] mt-[51px] pl-[27px] md:pr-10 pr-[59px] sm:px-5 w-[41%]"
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
                  className="h-[41px] w-[14%] ml-11 mr-[73px]"
                  alt="close"
                />

              </Sidebar>
              <div className="flex flex-col items-center justify-start ml-[-5px] mt-[57px] z-[1]">
                <Text
                  className="text-center text-gray_800"
                  as="h2"
                  variant="h2"
                >
                  Dashboard Home
                </Text>
              </div>
            </div>
            <div style={{ marginRight: '12%' }}>
              <HomeScreenColumnposts className="flex sm:flex-1 flex-col items-center justify-start md:mt-0 mt-[21px] sm:w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreenPage;
