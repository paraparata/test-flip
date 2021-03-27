import React, { useRef } from "react";

function TextField({
  prefix,
  placeholder = "Placeholder",
  onChange = () => {},
}) {
  const textRef = useRef();

  const handleOnChange = () => {
    onChange(textRef);
  };

  return (
    <div className="text-field">
      {prefix}
      <input
        ref={textRef}
        placeholder={placeholder}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default TextField;
