import React, { Component } from "react";
import "./Style.css";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    //   subTotal: 0,
      counter: 0,
    //   sum: 0,
      tittle: "",
    };
  }

  render() {
    const plus = () => {
      this.setState({
        count: this.state.count + 1,
        counter: this.state.counter + 20,
        sum: this.props.price,
      });
    };

    const minus = () => {
      this.setState({
        count: this.state.count - 1,
      });
    };

    return (
      <div className="ikkinchi">
        <div className="first">
          <img src={this.props.images} alt="" />
          <div className="second">
            <h2>{this.props.name}</h2>
            <h3>{this.props.code}</h3>
          </div>
          <h3>{this.props.price}</h3>

          <button onClick={plus}>+</button>
          {/* <button onClick={minus}>-</button> */}
          <h3>{this.state.count}</h3>
          <button onClick={minus}>-</button>
          <h3>{this.props.price * this.state.count}$</h3>
          {/* <h2>{this.state.sum + this.props.price}</h2> */}

          {/* <button onClick={minus}>-</button> */}
            </div>
            
            
      </div>
    );
  }
}

export default Child;
