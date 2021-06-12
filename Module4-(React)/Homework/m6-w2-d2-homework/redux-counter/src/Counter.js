import React from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class Counter extends React.Component {
  // state = { count: 0}

  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' })
    // this.setState({
    //     count: this.state.count + 1
    // });
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' })
    // this.setState({
    // //     count: this.state.count - 1
    // });
  }
  reset = () => {
    this.props.dispatch({ type: 'RESET' })
  }
  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div className="counterRow">
          <span>{this.props.count}</span>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    count: state.count
  };
}

// export default Counter;
export default connect(mapStateToProps)(Counter);
