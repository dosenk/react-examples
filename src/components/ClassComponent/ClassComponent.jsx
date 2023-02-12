import { Component } from "react";
import { NavLink } from "react-router-dom";

class ClassComponent extends Component {
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
    console.log("componentDidMount - Dima");
    setTimeout(() => {
      this.setState({
        age: this.state.age + 1,
      });
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate - Dima");
    // console.log(prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount - Dima");
  }

  render() {
    return (
      <div style={{ padding: "50px" }}>
        <h1>Hello, {this.props.name}!</h1>
        <h1 className="class1">age: {this.state.age}!</h1>
        <button onClick={this.handleClick}>Click</button>
        <div style={{ padding: "5px" }}>
          <NavLink to="/ivan">Go to Ivan</NavLink>
        </div>
      </div>
    );
  }
}

export default ClassComponent;
