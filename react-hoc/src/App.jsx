import React from "react";
import FeedbackForm from "./components/FeedbackForm";
import withValidation from "./hocs/withValidation";
import withAuthentication from "./hocs/withAuthentication";
import withLogging from "./hocs/withLogging";

// Compose HOCs: Auth → Validation → Logging → UI
const EnhancedFeedbackForm = withAuthentication(
  withValidation(withLogging(FeedbackForm))
);

function App() {
  const user = { name: "Kiran", isLoggedIn: true };

  const handleFinalSubmit = (formData) => {
    alert(`Feedback submitted: ${formData.feedback}, Comment: ${formData.comment}`);
    // Here, we could send data to backend API
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <EnhancedFeedbackForm user={user} onSubmit={handleFinalSubmit} />
    </div>
  );
}

export default App;
