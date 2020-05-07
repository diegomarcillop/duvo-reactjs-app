import React from "react";
import { Link } from "react-router-dom";

export default function Item({icon, url, name}) {
  return (
    <>
      <li className="nav-item active">
        <Link className="item_ nav-link" to={url}>
          <i className={icon}></i>
          {name}
        </Link>
      </li>
    </>
  );
}
