import React from "react";
import Label from "./Label";

const STATUS = {
  SUCCESS: {
    value: "Berhasil",
    color: "#56b586",
  },
  PENDING: {
    value: "Pengecekan",
    color: "#fd6542",
  },
};

function CardTransaction({
  title,
  subtitle,
  detail,
  status,
  strip = true,
  hoverable = true,
  onClick = () => {},
}) {
  const labelStyle = status === "SUCCESS" ? "default" : "outline";
  const isHover = hoverable ? "card-popup" : "card-nopopup";
  const stripColor = {
    "--strip-color": strip ? STATUS[status].color : "transparent",
  };

  return (
    <button
      className={`card ${isHover} bg-white`}
      style={stripColor}
      onClick={onClick}
    >
      <div>
        {title && <span>{title}</span>}
        {subtitle && <span>{subtitle}</span>}
        {detail && <span>{detail}</span>}
      </div>
      <div>
        <Label labelStyle={labelStyle}>{STATUS[status].value}</Label>
      </div>
    </button>
  );
}

export default CardTransaction;
