import React from "react";

function Input({
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-3 border rounded mb-4
                 focus:outline-none focus:ring-2 focus:ring-red-500"
    />
  );
}

export default Input;
