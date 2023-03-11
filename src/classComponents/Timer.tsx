import { Component } from "react";

interface TimerState {
  seconds: number;
}

export class Timer extends Component<object, TimerState> {
  private intervalId: ReturnType<typeof setInterval> = setInterval(() => {return;});

  constructor(props: object) {
    super(props);

    this.state = {seconds: 0};
  }

  componentDidMount(): void {
    this.intervalId = setInterval(() => {
      const {seconds} = this.state;
      this.setState({seconds: seconds + 1});
    }, 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.intervalId);
  }

  render() {
    const {seconds} = this.state;

    return(
      <div id="timer">
        <h2>Timer</h2>
        <p>Seconds elapsed since page load: {seconds}s</p>
      </div>
    );
  }
}