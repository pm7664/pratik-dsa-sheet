import React from "react";

function ProgressBar({ problems }) {
  const total = problems?.length || 0;
  const solved = problems?.filter((p) => p.solved).length || 0;
  const percent = total > 0 ? Math.round((solved / total) * 100) : 0;

  return (
    <div className="progress-container">
      <div className="progress-info">
        <span>
          Overall Progress: <strong>{percent}%</strong>
        </span>
        <span>
          {solved} / {total} Solved
        </span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;