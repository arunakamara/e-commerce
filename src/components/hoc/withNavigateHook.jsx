import React from "react";
import { useNavigate } from "react-router-dom";

function withNavigateHook(Component) {
  return (props) => {
    const navigation = useNavigate();
    return <Component navigation={navigation} {...props} />;
  };
}

export default withNavigateHook;
