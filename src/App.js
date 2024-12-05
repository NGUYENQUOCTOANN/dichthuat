import React from "react";
import AddWord from "./components/AddWord";
import "./styles.css"; // Đã sửa đúng tên file CSS

const App = () => {
  return (
    <div className="container">
      <h1>Dictionary App</h1>
      <AddWord />
    </div>
  );
};

export default App;
