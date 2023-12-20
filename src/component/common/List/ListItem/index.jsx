import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Tool1, Tool2, Tool3, Tool4, Tool5, Tool6, Tool7, Tool8, Tool9, Tool10, Tool11, Tool12, Tool13, Tool14, Tool15, Tool16, Tool17, Tool18 } from "../../../Tool";

const toolComponents = {
  1: Tool1,
  2: Tool2,
  3: Tool3,
  4: Tool4,
  5: Tool5,
  6: Tool6,
  7: Tool7,
  8: Tool8,
  9: Tool9,
  10: Tool10,
  11: Tool11,
  12: Tool12,
  13: Tool13,
  14: Tool14,
  15: Tool15,
  16: Tool16,
  17: Tool17,
  18: Tool18,
  // Add more mappings for other ids and components
};

const ListItem = ({ item: { id, name } }) => {
  const [showTool, setShowTool] = useState(true);
  const ToolComponent = toolComponents[id];

  const handleCheckboxChange = () => {
    setShowTool(!showTool);
  };

  return (
    <div className="listItem-wrap">
      <Link to={`/${id}`}>
        <span>😘{name}</span>
      </Link>
      <div className="checkbox-input" >
        <input title="Show Tool" type="checkbox" checked={showTool} onChange={handleCheckboxChange} />
        </div>
      <div className="toolItem">
        {showTool && ToolComponent && <ToolComponent />}
      </div>
    </div>
  );
};

export default ListItem;
