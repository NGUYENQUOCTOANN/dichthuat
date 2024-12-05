import React, { useState } from "react";
import { useSelector } from "react-redux";

const Quiz = () => {
  const words = useSelector((state) => state.vocabulary);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);

  if (words.length === 0) return <p>No words to quiz on!</p>;

  const handleSubmit = () => {
    if (answer.toLowerCase() === words[currentIndex].definition.toLowerCase()) {
      setScore(score + 1);
    }
    setAnswer("");
    setCurrentIndex((currentIndex + 1) % words.length);
  };

  return (
    <div>
      <h2>{words[currentIndex].word}</h2>
      <input
        type="text"
        placeholder="Your answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>Score: {score}</p>
    </div>
  );
};

export default Quiz;
