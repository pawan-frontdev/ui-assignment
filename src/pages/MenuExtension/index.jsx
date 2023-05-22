import React from "react";

import { Img, Text } from "components";
import HomeScreenColumnposts from "components/HomeScreenColumnposts";
import MenuExtensionMenuitems from "components/MenuExtensionMenuitems";

const MenuExtensionPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-helvetica items-center justify-end mx-auto p-[29px] sm:px-5 w-full">
        <div className="bg-gray_100 flex flex-row items-center justify-start max-w-[1355px] mt-[7px] mx-auto pr-[33px] md:px-5 rounded-[54px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="h-[959px] relative w-[36%] md:w-full">
              <div className="h-[959px] m-auto w-full">
                <div className="h-[959px] m-auto w-full">
                  <div className="absolute flex flex-col items-center justify-start right-[0] top-[6%]">
                    <Text
                      className="text-center text-gray_800"
                      as="h2"
                      variant="h2"
                    >
                      Dashboard Home
                    </Text>
                  </div>
                  <div className="absolute bg-pink_400 h-[959px] inset-y-[0] left-[0] my-auto rounded-[54px] shadow-bs3 w-[79%]"></div>
                </div>
                <Img
                  src="images/img_menuitemselection.svg"
                  className="absolute h-[63px] right-[-29%] top-[16%]"
                  style={{ width: '129%', maxWidth: '128%' }}
                  alt="menuitemselecti"
                />
              </div>
              <MenuExtensionMenuitems
                className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[8%] my-auto sm:w-full"
                dashboard="Dashboard"
                energymonitorinOne="Energy Monitoring System"
                conditionbased="Condition Based Monitoring"
                qualitycontrol="Quality Control"
                predictivemaintOne="Predictive Maintenance"
                inventorystatusOne="Inventory Status"
                traceability="Traceability"
                defectinductionOne="Defect Induction"
              />
            </div>
            <HomeScreenColumnposts className="flex sm:flex-1 flex-col items-center justify-start md:mt-0 mt-[21px] sm:w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuExtensionPage;
