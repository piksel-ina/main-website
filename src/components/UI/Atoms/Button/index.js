import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";

export const Button = ({
  children,
  to,
  href,
  onClick,
  variant = "primary", // primary, secondary, outline, link
  size = "md", // sm, md, lg
  block = false,
  className,
  itemProp,
  ...props
}) => {
  const buttonClass = clsx(
    "button",
    `button--${variant}`,
    size !== "md" && `button--${size}`,
    block && "button--block",
    className
  );

  if (to || href) {
    return (
      <Link className={buttonClass} to={to} href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
