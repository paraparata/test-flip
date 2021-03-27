import React, { useEffect, useState } from "react";

import Button from "./Button";
import Icon from "./Icon";

import icons from "../../assets/iconList";

// Detect device width
const mobileView = window.screen.width < 600;

function Dropdown({ dropdownOption }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownListVisibility = {
    "--dropdown-list-visibility": isOpen ? "visible" : "hidden",
  };

  // Click wherever to close dropdown list
  useEffect(() => {
    const handleOpenState = () => setIsOpen(false);
    if (isOpen) {
      document.addEventListener("click", handleOpenState);
    }

    return () => {
      document.removeEventListener("click", handleOpenState);
    };
  }, [isOpen]);

  const handleOnDDOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <Button
        btnStyle="base"
        width="100%"
        height="100%"
        onClick={handleOnDDOpen}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <span style={{ margin: 0, fontSize: "16px" }}>URUTKAN</span>
          <Icon
            icon={icons.arrowDownShort}
            color="#fd6542"
            size={mobileView ? "16" : "22"}
          />
        </div>
      </Button>
      <div className="dropdown-list bg-white" style={dropdownListVisibility}>
        <ul className="border-gray">
          {Object.entries(dropdownOption).map(([key, val]) => {
            return (
              <li key={key}>
                <Button
                  btnStyle="squarePadding"
                  width="100%"
                  height="100%"
                  onClick={val.handler}
                >
                  <div
                    style={{
                      display: "flex",
                      fontSize: "16px",
                      fontWeight: "400",
                      textAlign: "start",
                    }}
                  >
                    {val.name}
                  </div>
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
