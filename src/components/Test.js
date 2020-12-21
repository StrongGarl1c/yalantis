import React from 'react';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      isChecked: false,
    };
    this.myChangeHandler = this.myChangeHandler.bind(this);
  }

  myChangeHandler = (event) => {
    let name = event.target.name;
    let val = event.target.checked;
    // this.setState((state) => ({
    //   isChecked: val,
    // }));
    this.setState({ name: name, isChecked: val });
    // console.log(1, this.state.isChecked);
    // console.log(2, this.state.name);
  };

  render() {
    return (
      <div>
        <ul>
          <li>
            <input name="a" type="checkbox" onChange={this.myChangeHandler} />a
          </li>
          <li>
            <input name="b" type="checkbox" onChange={this.myChangeHandler} />b
          </li>
          <li>
            <input name="c" type="checkbox" onChange={this.myChangeHandler} />c
          </li>
        </ul>
        <h1>
          1 {this.state.name} <br /> {this.state.isChecked}
        </h1>
      </div>
    );
  }
}
export default Test;
