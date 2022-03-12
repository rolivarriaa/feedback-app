import React, { useState } from "react";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import Card from "./components/shared/Card";
import FeedbackData from "./data/FeedbackData";

function App() {
  const title = "My App";
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <div>
        <Header />
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );

  //   return React.createElement(
  //     "div",
  //     { className: "container" },
  //     React.createElement("h1", {}, "my App")
  //   );
}
export default App;
