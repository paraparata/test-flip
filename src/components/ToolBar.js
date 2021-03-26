import React from "react";

import Dropdown from "./shared/Dropdown";
import TextField from "./shared/TextField";
import Icon from "./shared/Icon";

import icons from "../assets/iconList";

const SearchIcon = <Icon icon={icons.search} color="#b4b4b4" size="22" />;

function ToolBar() {
  const dropdownOption = {
    ascend: {
      name: "Nama A-Z",
      handler: () => {},
    },
    descend: {
      name: "Nama Z-A",
      handler: () => {},
    },
    newer: {
      name: "Tanggal terbaru",
      handler: () => {},
    },
    older: {
      name: "Tanggal terlama",
      handler: () => {},
    },
  };

  return (
    <div className="toolbar bg-white border-gray">
      <div>
        <TextField placeholder="Cari nama atau bank" prefix={SearchIcon} />
      </div>
      <div className="toolbar-left border-gray">
        <Dropdown dropdownOption={dropdownOption} />
      </div>
    </div>
  );
}

export default ToolBar;
