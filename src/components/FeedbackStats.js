import React from "react";
import PropTypes from "prop-types";

function FeedbackStats({ feedback }) {
  //calculate ratings average
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  //   console.log(average);

  average = average.toFixed(1).replace(/[.,]0/, "");
  return (
    <div className="container">
      <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4> Average Rating: {isNaN(average) ? 0 : average}</h4>
      </div>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;