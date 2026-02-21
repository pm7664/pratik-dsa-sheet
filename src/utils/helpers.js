// Difficulty Badge Color Class
export const getDifficultyColor = (difficulty = "") => {
  const map = {
    Easy: "easy",
    Medium: "medium",
    Hard: "hard",
  };

  return map[difficulty] || "";
};


// Topic Progress Calculator
export const calculateTopicProgress = (problems = [], topic) => {
  if (!Array.isArray(problems) || !topic) return 0;

  const topicProblems = problems.filter((p) => p.topic === topic);

  if (topicProblems.length === 0) return 0;

  const solvedCount = topicProblems.filter((p) => p.solved).length;

  return Math.round((solvedCount / topicProblems.length) * 100);
};