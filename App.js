import React, { Component } from "react";
import "./App.css";
import ResizableImage from "./Components/ResizableImage";
import myImage from "./Components/AnalysisReport.png";

class App extends Component {
  state = {
    maxWidth: 400,
    resizable: false,
    savedWidth: 246,
  };
  onSave = (width) => {
    this.setState({ savedWidth: width });
  };
  onResize = () => {
    this.setState({ resizable: !this.state.resizable });
  };
  render() {
    const { maxWidth, resizable, savedWidth } = this.state;
    console.log(savedWidth, resizable);
    let Image;
    if (resizable) {
      Image = (
        <ResizableImage
          maxWidth={maxWidth}
          savedWidth={0}
          resizable={resizable}
          file={myImage}
          onResize={this.onResize}
          onSave={this.onSave}
        />
      );
    } else {
      Image = (
        <ResizableImage
          maxWidth={maxWidth}
          savedWidth={savedWidth}
          resizable={resizable}
          file={myImage}
          onResize={this.onResize}
          onSave={this.onSave}
        />
      );
    }
    return <div className="App">{Image}</div>;
  }
}
export default App;
