import React from "react";

function Joke(props) {
  return (
    <div>
      {props.setup ? <h2>{props.setup}</h2> : ""}
      <p>{props.punchline}</p>
    </div>
  );
}
export default Joke;

export const Joke1 = props => {
  return (
    <div>
      <h2>{props.setup}</h2>
      <h3>{props.punchline}</h3>
    </div>
  );
};
