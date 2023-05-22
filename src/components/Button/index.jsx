import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbCircleBorder22: "rounded-[22px]",
  icbRoundedBorder10: "rounded-[10px]",
  CircleBorder23: "rounded-[23px]",
};
const variants = {
  icbFillPink400: "bg-pink_400",
  icbFillWhiteA700: "bg-white_A700",
  FillWhiteA700: "bg-white_A700",
};
const sizes = { smIcn: "p-[7px]", mdIcn: "p-[15px]", sm: "p-[13px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "icbCircleBorder22",
    "icbRoundedBorder10",
    "CircleBorder23",
  ]),
  variant: PropTypes.oneOf([
    "icbFillPink400",
    "icbFillWhiteA700",
    "FillWhiteA700",
  ]),
  size: PropTypes.oneOf(["smIcn", "mdIcn", "sm"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
