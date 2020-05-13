import React from "react";
import "./ProgressBar.css";

function ProgressBar({ progress }) {
  return (
    <div>
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped "
          role="progressbar"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: progress + "%" }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
}
export default ProgressBar;
