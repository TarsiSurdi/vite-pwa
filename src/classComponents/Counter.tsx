import { Component } from "react";

interface CounterState {
  count: number;
}

export class Counter extends Component<object, CounterState> {
  constructor(props: object) {
    super(props);

    this.state = {count: 0};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {count} = this.state;
    this.setState({count: count + 1});
  }

  render() {
    const {count} = this.state;

    return(
      <div id="counter">
        <h2>Counter</h2>
        {count > 0 && <p>You&apos;ve clicked the button {count} time{count > 1 && "s"}!</p>}
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}