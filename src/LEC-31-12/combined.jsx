import MyButton from "./MyBtn";
import MyList from "./MyList"
import * as React from "react";

class MyComponent extends React.Component {
  state = {
    abc: "My Button",
    xyz: true,
    itms: ["a", "b", "c", "d"],
  };
  render() {
    const { abc, xyz, itms } = this.state;
    return (
      <div>
        <MyButton abc={abc} xyz={xyz} />
        <MyList itms={itms} />
      </div>
    );
  }
}
export default MyComponent;