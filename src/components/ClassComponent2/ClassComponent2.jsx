import { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

class ClassComponent2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 42,
    };
  }

  handleClick = () => {
    this.setState({
      age: this.state.age + 1,
    });
  };

  componentDidMount() {
    console.log("componentDidMount  - Ivan");
    setTimeout(() => {
      this.setState({
        age: this.state.age + 1,
      });
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate  - Ivan");
    console.log(prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount - Ivan");
  }

  render() {
    return (
      <div style={{ padding: "50px" }}>
        <h1>Hello, {this.props.name}!</h1> // todo this.props -> this.state
        <h1>age: {this.state.age}!</h1>
        {/*<button onClick={this.handleClick}>Click</button>*/}
        <div style={{ padding: "5px" }}>
          <NavLink to="/">Back to Dima</NavLink>
          <br />
          <NavLink to="/oleg">Go to Oleg</NavLink>
        </div>
      </div>
    );
  }
}

export default ClassComponent2;
