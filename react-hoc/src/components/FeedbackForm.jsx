import React, { useState } from "react";

const FeedbackForm = ({ onSubmit }) => {
  const [feedback, setFeedback] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ feedback, comment }); // delegate logic to HOCs
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-6 w-[400px] mx-auto border rounded-2xl shadow-md"
    >
      <h2 className="text-xl font-bold text-center">Employee Feedback Form</h2>

      {/* Question 1 */}
      <label className="font-medium">MileStone2 Completed?</label>
      <select
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">-- Select --</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      {/* Comments */}
      <label className="font-medium">Additional Comments</label>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="border p-2 rounded"
        placeholder="Write your comments..."
      />

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default FeedbackForm;
