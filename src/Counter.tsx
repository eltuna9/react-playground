import React from 'react';

export class Counter extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>Counter value is {this.state.value} </h1>
        <button onClick={() => this.setState({ value: this.state.value + 1 })}>+1</button>
      </div>
    );
  }
}
