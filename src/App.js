import React, { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import Card from "./components/shared/Card";
import FeedbackData from "./data/FeedbackData";
import { v4 as uuidv4 } from "uuid";

function App() {
  const title = "My App";
  const [feedback, setFeedback] = useState(FeedbackData);
  const addFeedback = (newFeedback) => {
    // newFeedback.id = uuidv4();
    newFeedback.id = Math.random();
    setFeedback([newFeedback, ...feedback]);

    console.log(feedback);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <div>
        <Header />
        <div className="container">
          <FeedbackForm handleAdd={addFeedback} />
          <FeedbackStats feedback={feedback} />
          <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        </div>
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
