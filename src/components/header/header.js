import React from "react";
import "./header.scss";
import Search from "../search/search";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <Link className="logo" to="/">
        Members
      </Link>

      <Search dataReducer={props.dataReducer} />
    </div>
  );
}

export default Header;
