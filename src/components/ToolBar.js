import React from "react";

import Dropdown from "./shared/Dropdown";
import Search from "./Search";

function ToolBar({ options, handleOnSearch }) {
  return (
    <div className="toolbar bg-white border-gray">
      <div>
        <Search
          placeholder="Cari nama atau bank"
          onChange={(e) => handleOnSearch(e)}
        />
      </div>
      <div className="toolbar-left border-gray">
        <Dropdown dropdownOption={options} />
      </div>
    </div>
  );
}

export default ToolBar;
