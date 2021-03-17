import React from "react";
import { generateRoutine } from "../Services/generateRoutine";
class Home extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log(generateRoutine(["Pierna"]));
  }

  render() {
    return (
      <div>
        <header class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1>Home</h1>
        </header>
        <section>
          <p>asdasdas</p>
        </section>
      </div>
    );
  }
}

export default Home;
