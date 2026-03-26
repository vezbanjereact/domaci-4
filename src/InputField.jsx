import React from "react";

const InputField = ({ id, title, setMethod, type }) => {
  return (
    <div className="flex flex-col gap-y-3 text-center">
      <label htmlFor={id}>{title}:</label>
      <input
        onChange={(e) => setMethod(e.target.value)}
        id={id}
        type={type}
        max={50}
        className="border border-gray-500 rounded-md w-100 py-2 text-center"
      />
    </div>
  );
};

export default InputField;
