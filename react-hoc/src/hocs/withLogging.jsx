import React from "react";

const withLogging = (WrappedComponent) => {
  return (props) => {
    const handleSubmit = (formData) => {
      console.log(
        `[LOG] User ${props.user?.name} submitted:`,
        formData,
        "at",
        new Date().toLocaleTimeString()
      );

      if (props.onSubmit) props.onSubmit(formData);
    };

    return <WrappedComponent {...props} onSubmit={handleSubmit} />;
  };
};

export default withLogging;
