import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWord } from "../redux/vocabSlice";
import { nanoid } from "nanoid";
import translate from "translate";

translate.engine = "google"; // Sử dụng Google Translate
translate.key = "YOUR_GOOGLE_API_KEY"; // Thay bằng API key của bạn (nếu dùng Google)

const AddWord = () => {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");
  const [fromLang, setFromLang] = useState("en"); // Ngôn ngữ gốc (default: English)
  const [toLang, setToLang] = useState("vi"); // Ngôn ngữ đích (default: Vietnamese)
  const dispatch = useDispatch();

  const handleTranslate = async () => {
    if (word) {
      const translated = await translate(word, { from: fromLang, to: toLang });
      setDefinition(translated);
    }
  };

  const handleSubmit = () => {
    if (word && definition) {
      dispatch(addWord({ id: nanoid(), word, definition }));
      setWord("");
      setDefinition("");
    }
  };

  return (
    <div>
      <h2>Dictionary App</h2>
      <div className="select-container">
        <label htmlFor="from-lang">From Language:</label>
        <select
          id="from-lang"
          value={fromLang}
          onChange={(e) => setFromLang(e.target.value)}
        >
          <option value="en">English</option>
          <option value="vi">Vietnamese</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          <option value="de">German</option>
          <option value="ja">Japanese</option>
          {/* Thêm các ngôn ngữ khác nếu cần */}
        </select>

        <label htmlFor="to-lang">To Language:</label>
        <select
          id="to-lang"
          value={toLang}
          onChange={(e) => setToLang(e.target.value)}
        >
          <option value="en">English</option>
          <option value="vi">Vietnamese</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          <option value="de">German</option>
          <option value="ja">Japanese</option>
          {/* Thêm các ngôn ngữ khác nếu cần */}
        </select>
      </div>

      <input
        type="text"
        placeholder="Enter word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={handleTranslate}>Translate</button>

      <textarea
        placeholder="Translation will appear here"
        value={definition}
        onChange={(e) => setDefinition(e.target.value)}
        readOnly
      ></textarea>

      <button onClick={handleSubmit}>Add Word</button>
    </div>
  );
};

export default AddWord;
