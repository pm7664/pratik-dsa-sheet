import React from "react";
import { calculateTopicProgress } from "../utils/helpers";

function Sidebar({ problems, selectedTopic, setSelectedTopic }) {
  // Generate unique topics
  const topics = ["All", ...new Set(problems.map((p) => p.topic))];

  return (
    <div className="sidebar">
      <h3 className="sidebar-title">Topics</h3>

      {topics.map((topic, index) => {
        const isActive = selectedTopic === topic;

        return (
          <div
            key={index}
            className={`sidebar-item ${isActive ? "active" : ""}`}
            onClick={() => setSelectedTopic(topic)}
          >
            <span>{topic}</span>

            {topic !== "All" && (
              <span className="topic-progress">
                {calculateTopicProgress(problems, topic)}%
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;