import React from "react";

const FieldInput = ({
  register,
  label,
  name,
  errors,
  type = "text",
  Icon,
  placeholder,
}) => {
  return (
    <div className="form-group flex flex-col gap-1 px-8">
      <label
        htmlFor="username"
        className="text-gray-500 font-semibold text-sm ml-1"
      >
        {label}
      </label>
      <div className="flex items-center gap-3 border-b-2 border-gray-300 pb-1">
        {Icon && <Icon></Icon>}
        <input
          step="0.01"
          {...register(name)}
          className="focus:outline-none"
          id="email"
          type={type}
          placeholder={placeholder}
        />
      </div>
      {errors[name] && (
        <p className="text-red-500 font-semibold py-2">
          {errors[name].message}
        </p>
      )}
    </div>
  );
};

export default FieldInput;
