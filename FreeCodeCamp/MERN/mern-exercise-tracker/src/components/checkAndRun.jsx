import React from "react";
import ReactDom from "react-dom";
import "./checkAndRun.scss";

export default function CheckAndRun() {
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
}

class App1 extends React.Component {
  render() {
    return <div>Meow Meow!</div>;
  }
}
