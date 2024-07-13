import React from "react";

const TextInput = ({
  className,
  forId,
  type,
  onChange,
  placeholder,
  labelText,
  error,
  label,
  value,
}) => {
  const classes = `border-2 border-black rounded-lg py-1.5 px-2 bg-[#e4ebf1]${
    className || ""
  }`;

  const labelClasses = `font-semibold `;

  const renderInput = () => (
    <>
      <div className="flex flex-col p-2 gap-2">
        <label className={labelClasses}>{labelText} :</label>
        <input
          id={forId}
          type={type || "text"}
          value={value}
          className={classes}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </>
  );

  return renderInput();
};

export default TextInput;
