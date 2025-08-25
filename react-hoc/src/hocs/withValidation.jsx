import React from "react";

const withValidation = (WrappedComponent) => {
  return (props) => {
    const handleSubmit = (formData) => {
      if (!formData.feedback) {
        alert("Please select Yes/No before submitting.");
        return;
      }
      // pass to next HOC / final submit
      if (props.onSubmit) props.onSubmit(formData);
    };

    return <WrappedComponent {...props} onSubmit={handleSubmit} />;
  };
};

export default withValidation;
