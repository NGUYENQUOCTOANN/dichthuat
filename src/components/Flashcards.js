import React, { useState } from "react";
import { useSelector } from "react-redux";

const Flashcards = () => {
  const words = useSelector((state) => state.vocabulary);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);

  if (words.length === 0) return <p>No words to display!</p>;

  const nextCard = () => {
    setCurrentIndex((currentIndex + 1) % words.length);
    setShowDefinition(false);
  };

  return (
    <div>
      <h2>{words[currentIndex].word}</h2>
      {showDefinition && <p>{words[currentIndex].definition}</p>}
      <button onClick={() => setShowDefinition(!showDefinition)}>
        {showDefinition ? "Hide Definition" : "Show Definition"}
      </button>
      <button onClick={nextCard}>Next</button>
    </div>
  );
};

export default Flashcards;
