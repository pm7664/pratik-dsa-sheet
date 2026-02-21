import React from "react";

export default function FilterBar({
  topics,
  selectedTopic,
  setSelectedTopic,
  selectedDifficulty,
  setSelectedDifficulty,
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="filter-bar">
      {/* Topic Filter */}
      <select
        value={selectedTopic}
        onChange={(e) => setSelectedTopic(e.target.value)}
      >
        <option value="All">All Topics</option>
        {topics.map((topic, index) => (
          <option key={index} value={topic}>
            {topic}
          </option>
        ))}
      </select>

      {/* Difficulty Filter */}
      <select
        value={selectedDifficulty}
        onChange={(e) => setSelectedDifficulty(e.target.value)}
      >
        <option value="All">All Difficulty</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search question..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Clear Button */}
      <button
        onClick={() => {
          setSelectedTopic("All");
          setSelectedDifficulty("All");
          setSearchTerm("");
        }}
      >
        Clear
      </button>
    </div>
  );
}