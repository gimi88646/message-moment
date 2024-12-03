"use client";

import React from "react";

const ReloadFunction = ({ children }) => {
  setTimeout(() => {
    window.location.reload();
  }, 5000);

  return <>{children}</>;
};

export default ReloadFunction;
