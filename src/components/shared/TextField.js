import React from "react";

function TextField({
  prefix,
  placeholder = "Placeholder",
  onChange = () => {},
}) {
  return (
    <div className="text-field">
      {prefix}
      <input placeholder={placeholder} onChange={onChange} />
    </div>
  );
}

export default TextField;
