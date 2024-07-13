import React from "react";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `px-2 py-1 lg:px-4 md:py-1.5 xl:px-6 bg-black text-white text-sm border border-transparent hover:border-black hover:bg-transparent hover:text-black transition-all duration-200 
${className || ""}`;

  const spanClasses = "font-semibold";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={`${spanClasses}`}>{children}</span>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
