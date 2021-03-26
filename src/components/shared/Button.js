import React from "react";

const styles = {
  default: "box box-btn bg-primary text-white",
  base: "box box-btn box-btn bg-white",
  flat: "box box-btn box-outline border-secondary text-secondary",
  outline: "box-outline border-secondary",
  squarePadding: "box box-btn box-spadding bg-white",
};

function Button({
  type = "button",
  btnStyle = "default",
  width = "fit-object",
  height = "auto",
  onClick = () => {},
  children,
}) {
  return (
    <button
      type={type}
      className={styles[btnStyle]}
      style={{ width, height }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
