import React, { useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Question1 from "./questions/Question1.jsx";
import Question2 from "./questions/Question2.jsx";
import Question3 from "./questions/Question3.jsx";
import Question4 from "./questions/Question4.jsx";
import Question5 from "./questions/Question5.jsx";
import Question6 from "./questions/Question6.jsx";
import Question7 from "./questions/Question7.jsx";
import Question8 from "./questions/Question8.jsx";
import Question9 from "./questions/Question9.jsx";
import Question10 from "./questions/Question10.jsx";
import Question11 from "./questions/Question11.jsx";
import Question12 from "./questions/Question12.jsx";
import Question13 from "./questions/Question13.jsx";
import Question14 from "./questions/Question14.jsx";
import Question15 from "./questions/Question15.jsx";
import Question16 from "./questions/Question16.jsx";
import Question17 from "./questions/Question17.jsx";
import Question18 from "./questions/Question18.jsx";
import Question19 from "./questions/Question19.jsx";
import Question20 from "./questions/Question20.jsx";
// ... import up to Question20

function App() {
  // Track which question is selected
  const [activeQuestion, setActiveQuestion] = useState(null);

  // Map question names to components
  const questionComponents = {
    1: <Question1 />,
    2: <Question2 />,
    3: <Question3 />,
    4: <Question4 />,
    5: <Question5 />,
    6: <Question6 />,
    7: <Question7 />,
    8: <Question8 />,
    9: <Question9 />,
    10: <Question10 />,
    11: <Question11 />,
    12: <Question12 />,
    13: <Question13 />,
    14: <Question14 />,
    15: <Question15 />,
    16: <Question16 />,
    17: <Question17 />,
    18: <Question18 />,
    19: <Question19 />,
    20: <Question20 />,
    // ... add up to 20
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Assignment-3</h1>

      {/* Buttons to select a question */}
      <div style={{ marginBottom: "20px" }}>
        {Array.from({ length: 20 }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setActiveQuestion(i + 1)}
            style={{
              margin: "5px",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            Question {i + 1}
          </button>
        ))}
      </div>

      {/* Render the selected question */}
      <div style={{ border: "1px solid #ccc", padding: "20px" }}>
        {activeQuestion ? (
          questionComponents[activeQuestion]
        ) : (
          <p>Please select a question above.</p>
        )}
      </div>
    </div>
  );
}


export default App;