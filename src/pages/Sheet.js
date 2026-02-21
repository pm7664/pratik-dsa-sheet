import React, { useState, useMemo } from "react";
import problemsData from "../data/problems.json";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProblemCard from "../components/ProblemCard";
import ProgressBar from "../components/ProgressBar";

function Sheet() {
  // 🌙 Dark Mode
  const [darkMode, setDarkMode] = useState(false);

  // ✅ Initialize problems only once
  const [problems, setProblems] = useState(() =>
    problemsData.map((p) => ({
      ...p,
      solved: false,
    }))
  );

  const [selectedTopic, setSelectedTopic] = useState("All");

  // ✅ Memoized filtering (prevents unnecessary re-renders)
  const filteredProblems = useMemo(() => {
    if (selectedTopic === "All") return problems;
    return problems.filter((p) => p.topic === selectedTopic);
  }, [problems, selectedTopic]);

  // ✅ Toggle solved
  const toggleSolved = (id) => {
    setProblems((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, solved: !p.solved } : p
      )
    );
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="layout">
        <Sidebar
          problems={problems}
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
        />

        <div className="main">
          <ProgressBar problems={problems} />

          {filteredProblems.length === 0 ? (
            <p>No questions found.</p>
          ) : (
            filteredProblems.map((problem) => (
              <ProblemCard
                key={`${problem.id}-${problem.title}`} 
                problem={problem}
                toggleSolved={toggleSolved}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Sheet;