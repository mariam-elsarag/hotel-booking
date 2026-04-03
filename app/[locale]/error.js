"use client";
import React from "react";

const Error = ({ error, reset }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error?.message}</p>
    </div>
  );
};

export default Error;
