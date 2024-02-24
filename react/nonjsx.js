import React from "react";
import ReactDOM from "react-dom";

class Demo extends React.Component {
  render() {
    return React.createElement('h1', null, "Welcome to React");
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Demo />);
export default Demo;
