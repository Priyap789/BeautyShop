import React from "react";

function Button({ text, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold
                 hover:bg-red-700 transition duration-300"
    >
      {text}
    </button>
  );
}

export default Button;
