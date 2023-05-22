import React from "react";

import { Button, Text } from "components";

const HomeScreenColumnposts = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray_100_01 border border-gray_200 border-solid flex flex-row gap-10 items-center justify-end p-0.5 rounded-[25px] w-full">
          <Text
            className="font-helvetica font-normal text-center text-gray_400"
            as="h6"
            variant="h6"
          >
            {props?.posts}
          </Text>
          <div className="h-[46px] relative w-[51%]">
            <Text
              className="absolute font-inter font-medium h-max inset-[0] justify-center m-auto text-center text-gray_400 w-max"
              as="h6"
              variant="h6"
            >
              {props?.search}
            </Text>
            <Button
              className="absolute cursor-pointer font-bold font-helvetica h-full inset-[0] justify-center leading-[normal] m-auto min-w-[171px] text-base text-center text-pink_400"
              shape="CircleBorder23"
              size="sm"
              variant="FillWhiteA700"
            >
              {props?.dashboard}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

HomeScreenColumnposts.defaultProps = {
  posts: "Digital Twin",
  search: "Search",
  dashboard: "Dashboard",
};

export default HomeScreenColumnposts;
