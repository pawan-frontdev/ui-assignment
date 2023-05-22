import React from "react";

const variantClasses = {
  h1: "font-light text-[7px]",
  h2: "font-bold sm:text-4xl md:text-[38px] text-[40px]",
  h3: "font-bold text-3xl sm:text-[26px] md:text-[28px]",
  h4: "font-bold md:text-2xl sm:text-[22px] text-[26px]",
  h5: "text-lg",
  h6: "text-base",
  body1: "font-normal text-sm",
};

const Text = ({ children, className = "", variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
