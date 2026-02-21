import React from "react";
import { getDifficultyColor } from "../utils/helpers";

function ProblemCard({ problem, toggleSolved }) {
  if (!problem) return null;

  return (
    <div className={`card ${problem.solved ? "solved" : ""}`}>
      <div className="card-header">
        <h3>{problem.title}</h3>

        <span
          className={`badge ${getDifficultyColor(
            problem.difficulty
          )}`}
        >
          {problem.difficulty}
        </span>
      </div>

      <p className="topic">{problem.topic}</p>

      <div className="card-actions">
        <a
          href={problem.link}
          target="_blank"
          rel="noopener noreferrer"
          className="solve-link"
        >
          Solve ↗
        </a>

        <button
          className="solve-btn"
          onClick={() => toggleSolved(problem.id)}
        >
          {problem.solved ? "Solved ✅" : "Mark Solved"}
        </button>
      </div>
    </div>
  );
}

export default ProblemCard;