import React, { Component } from "react";
// import CounterButton from "./CounterButton";

class Counter extends Component {

  constructor(props) {
    super(props); 
    this.State = { value: 0, };
  }
  componentDidMount() {
    // console.log(this.State);
    console.log("component did mount");
   
  }
//   increment(){
//     console.log("huii");
// this.setState({count : this.State.value + 1});

//   }
  render() {
    return (
      <div>
        
        {/* <CounterButton increment={this.increment}/> */}
        <button onClick={() => {this.setState({ value: this.state.value + 1 })}}>
          click me
        </button>
        <h1>{this.State.value}</h1>
      </div>
    );
  }
}
export default Counter;
