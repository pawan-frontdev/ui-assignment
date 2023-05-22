import React from "react";

import { Button, Img } from "components";
import { useNavigate } from "react-router-dom";

const CBMMenuitems = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={props.className}>
        <Button
          className="flex items-center justify-center w-[58px]"
          shape="icbRoundedBorder10"
          size="mdIcn"
          variant="icbFillWhiteA700"
        >
          <Img src="images/img_menu.svg" alt="menu" />
        </Button>
        <Img src="images/img_lock.svg" className="h-10 w-[41px]" alt="lock" />
        <Img src="images/img_call.svg" className="h-[52px]" alt="call"
        onClick={() => {navigate('/ems')}}
        />
        <Img
          src="images/img_reply.svg"
          className="h-[41px] w-[41px]"
          alt="reply"
        />
        <Img
          src="images/img_group.svg"
          className="h-[41px] w-[41px]"
          alt="group"
        />
        <Img
          src="images/img_warning.svg"
          className="h-[41px] w-[41px]"
          alt="warning"
        />
        <Img
          src="images/img_trash.svg"
          className="h-[42px] w-[41px]"
          alt="trash"
        />
        <Img
          src="images/img_globe.svg"
          className="h-[41px] w-[41px]"
          alt="globe"
        />
        <Img src="images/img_close.svg" className="h-[41px]" alt="close" />
      </div>
    </>
  );
};

CBMMenuitems.defaultProps = {};

export default CBMMenuitems;
