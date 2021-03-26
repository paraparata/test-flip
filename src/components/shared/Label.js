import React from "react";

const styles = {
  default: "box bg-primary text-white",
  flat: "box box-lite bg-white text-black",
  outline: "box box-outline border-secondary",
};

function Label({
  labelStyle = "default",
  width = "fit-object",
  height = "auto",
  children,
}) {
  return (
    <label className={styles[labelStyle]} style={{ width, height }}>
      {children}
    </label>
  );
}

export default Label;
