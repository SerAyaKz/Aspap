import React from "react";
import "./style.css";
import { Logo } from "../../../images/index";

const EmptyView = () => (
  <div className="emptyView-wrap">
    <img src={Logo} alt="" />
  </div>
);

export default EmptyView;