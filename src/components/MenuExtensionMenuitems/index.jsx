import React from "react";

import { Button, Img, Text } from "components";
import { useNavigate } from "react-router-dom";


const MenuExtensionMenuitems = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-14 justify-start w-full">
          <Button
            className="flex h-[57px] items-center justify-center md:ml-[0] ml-[245px] w-[58px]"
            shape="icbRoundedBorder10"
            size="smIcn"
            variant="icbFillWhiteA700"
          >
            <Img src="images/img_checkmark_pink_400.svg" alt="checkmark" />
          </Button>
          <div className="flex flex-row gap-[30px] items-center justify-end md:ml-[0] ml-[133px] w-[53%] md:w-full">
            <Text
              className="font-helvetica font-normal text-right text-white_A700"
              as="h5"
              variant="h5"
            >
              {props?.dashboard}
            </Text>
            <Img
              src="images/img_lock.svg"
              className="h-10 w-[41px]"
              alt="lock"
            />
          </div>
          <div className="flex flex-row gap-[30px] items-center justify-between ml-2.5 md:ml-[0] w-[92%] md:w-full">
            <Text
              className="font-helvetica font-normal text-right text-white_A700"
              as="h5"
              variant="h5"
            >
              {props?.energymonitorinOne}
            </Text>
            <Img src="images/img_call.svg" className="h-[52px]" alt="call" 
            onClick={() => {navigate('/ems')}}
            />
          </div>
          <div className="flex flex-row gap-[30px] items-center justify-between mr-[11px] w-[97%] md:w-full">
            <Text
              className="font-helvetica font-normal text-right text-white_A700"
              as="h5"
              variant="h5"
            >
              {props?.conditionbased}
            </Text>
            <Img
              src="images/img_reply.svg"
              className="h-[41px] w-[41px]"
              alt="reply"
            />
          </div>
          <div className="flex flex-row gap-[30px] items-center justify-end md:ml-[0] ml-[102px] w-[63%] md:w-full">
            <Text
              className="font-helvetica font-normal text-right text-white_A700"
              as="h5"
              variant="h5"
            >
              {props?.qualitycontrol}
            </Text>
            <Img
              src="images/img_group.svg"
              className="h-[41px] w-[41px]"
              alt="group"
            />
          </div>
          <div className="flex flex-row gap-[30px] items-center justify-end md:ml-[0] ml-[34px] w-[85%] md:w-full">
            <Text
              className="font-helvetica font-normal text-right text-white_A700"
              as="h5"
              variant="h5"
            >
              {props?.predictivemaintOne}
            </Text>
            <Img
              src="images/img_warning.svg"
              className="h-[41px] w-[41px]"
              alt="warning"
            />
          </div>
          <div className="flex flex-col gap-[57px] items-start justify-start md:ml-[0] ml-[91px] w-[66%] md:w-full">
            <div className="flex flex-row gap-[29px] items-center justify-between w-full">
              <Text
                className="font-helvetica font-normal text-right text-white_A700"
                as="h5"
                variant="h5"
              >
                {props?.inventorystatusOne}
              </Text>
              <Img
                src="images/img_trash.svg"
                className="h-[42px] w-[41px]"
                alt="trash"
              />
            </div>
            <div className="flex flex-row gap-[29px] items-center justify-end md:ml-[0] ml-[37px] w-[82%] md:w-full">
              <Text
                className="font-helvetica font-normal text-right text-white_A700"
                as="h5"
                variant="h5"
              >
                {props?.traceability}
              </Text>
              <Img
                src="images/img_globe.svg"
                className="h-[41px] w-[41px]"
                alt="globe"
              />
            </div>
            <div className="flex flex-row items-center justify-between w-[99%] md:w-full">
              <Text
                className="font-helvetica font-normal text-right text-white_A700"
                as="h5"
                variant="h5"
              >
                {props?.defectinductionOne}
              </Text>
              <Img
                src="images/img_close.svg"
                className="h-[41px]"
                alt="close"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MenuExtensionMenuitems.defaultProps = {
  dashboard: "Dashboard",
  energymonitorinOne: "Energy Monitoring System",
  conditionbased: "Condition Based Monitoring",
  qualitycontrol: "Quality Control",
  predictivemaintOne: "Predictive Maintenance",
  inventorystatusOne: "Inventory Status",
  traceability: "Traceability",
  defectinductionOne: "Defect Induction",
};

export default MenuExtensionMenuitems;
