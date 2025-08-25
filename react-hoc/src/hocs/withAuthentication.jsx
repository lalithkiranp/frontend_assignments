import React from "react";

const withAuthentication = (WrappedComponent) => {
  return (props) => {
    const isLoggedIn = props.user?.isLoggedIn; // simulate authentication check

    if (!isLoggedIn) {
      return <h2 className="text-red-500 text-center">Please login to submit feedback.</h2>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuthentication;
