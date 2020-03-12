import React from "react";
import Joke from "./jokes";
import jokesData from "./jokesData";

class Joken extends React.Component {
  constructor() {
    super();
    this.state = {
      jokesList: jokesData
    };
  }
  render() {
    let JokenMape = this.state.jokesList.map(joke => (
      <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />
    ));
    return <div>{JokenMape}</div>;
  }
}

// function Joken() {
//   // return (
//   //   <div>
//   //     {console.log(jokesData)}
//   //     {jokesData.map(joke => (
//   //       <div>
//   //         <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />
//   //       </div>
//   //     ))}
//   //   </div>
//   // );

//   let JokenMape = jokesData.map(joke => (
//     <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />
//   ));

//   return <div>{JokenMape}</div>;
// }
export default Joken;
