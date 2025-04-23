import React, { useState } from "react";
import "./Feedback.css";

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    rating: "",
    comments: "",
  });

  const [surveyAnswers, setSurveyAnswers] = useState({
    q1: "",
    q2: "",
  });

  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSurveyChange = (e) => {
    const { name, value } = e.target;
    setSurveyAnswers({ ...surveyAnswers, [name]: value });
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${feedback.name}, for your feedback!`);
    console.log("Feedback Submitted: ", feedback);
  };

  const handleSurveySubmit = (e) => {
    e.preventDefault();
    alert("Thank you for participating in the survey!");
    console.log("Survey Responses: ", surveyAnswers);
  };

  return (
    <div className="feedback-form-container">
      <h1>Feedback and Survey</h1>

      {/* Feedback Form */}
      <form onSubmit={handleFeedbackSubmit} className="feedback-form">
        <h2>Feedback Form</h2>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={feedback.name}
          onChange={handleFeedbackChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={feedback.email}
          onChange={handleFeedbackChange}
          required
        />

        <label htmlFor="rating">Rating (1-5):</label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={feedback.rating}
          onChange={handleFeedbackChange}
          min="1"
          max="5"
          required
        />

        <label htmlFor="comments">Comments:</label>
        <textarea
          id="comments"
          name="comments"
          value={feedback.comments}
          onChange={handleFeedbackChange}
          rows="4"
        ></textarea>

        <button type="submit" className="feedback-submit-btn">
          Submit Feedback
        </button>
      </form>

      {/* Survey Section */}
      <form onSubmit={handleSurveySubmit} className="survey-form">
        <h2>Survey</h2>

        <p>1. How satisfied are you with the university's events?</p>
        <div className="survey-options">
          <label>
            <input
              type="radio"
              name="q1"
              value="Very Satisfied"
              onChange={handleSurveyChange}
            />
            Very Satisfied
          </label>
          <label>
            <input
              type="radio"
              name="q1"
              value="Satisfied"
              onChange={handleSurveyChange}
            />
            Satisfied
          </label>
          <label>
            <input
              type="radio"
              name="q1"
              value="Neutral"
              onChange={handleSurveyChange}
            />
            Neutral
          </label>
          <label>
            <input
              type="radio"
              name="q1"
              value="Dissatisfied"
              onChange={handleSurveyChange}
            />
            Dissatisfied
          </label>
        </div>

        <p>2. Would you recommend our university to others?</p>
        <div className="survey-options">
          <label>
            <input
              type="radio"
              name="q2"
              value="Yes"
              onChange={handleSurveyChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="q2"
              value="No"
              onChange={handleSurveyChange}
            />
            No
          </label>
        </div>

        <button type="submit" className="survey-submit-btn">
          Submit Survey
        </button>
      </form>
    </div>
  );
};

export default Feedback;
