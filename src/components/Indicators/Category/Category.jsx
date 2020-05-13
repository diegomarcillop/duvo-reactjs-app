import React from "react";
import './Category.css'

export default function Category({count, title, image}) {
  return (
    <>
      <div className="col-sm-3 card-indicator shadow-sm rounded">
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <img src={image} alt="students"></img>
            </div>
            <div className="col-6 border-left">
              <h2 className="m-2">{count}</h2>
            </div>
          </div>
          <h1 className="text-center">{title}</h1>
        </div>
      </div>
    </>
  );
}
