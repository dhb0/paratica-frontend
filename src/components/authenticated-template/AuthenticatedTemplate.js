import React from "react";
import Dashboard from "../dashboard/Dashboard";
import ResponsiveAppBar from "../menu/Menu";

const AuthenticatedTemplate = () => {
  return (
    <div id="authenticatedTemplate">
        <ResponsiveAppBar />
        <Dashboard />
    </div>
  );
};

export default AuthenticatedTemplate;
