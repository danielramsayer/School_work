import React from "react";
import ReactDom from "react-dom";
import "./checkAndRun.scss";

export const CheckAndRun = () => {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours <= 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  return <div className={timeOfDay}>{timeOfDay}</div>;
};
