import React from "react";
import { ResizableBox } from "react-resizable";
import PropTypes from "prop-types";
import "./styles.css";
import "./test.css";
class ResizableImage extends React.Component {
  state = {
    file: null,
    width: 0,
    height: 0,
    imageStatus: "loading",
    dimensions: {},
    error: "",
    resize: false,
  };
  SaveRef = React.createRef();
  onResize = (event, { element, size, handle }) => {
    console.log(size.width, size.height);
    this.setState({ width: size.width, height: size.height });
  };
  onImgLoad = ({ target: img }) => {
    console.log("Img Load called");
    let myWidth;
    this.props.savedWidth == 0
      ? (myWidth = this.props.maxWidth)
      : (myWidth = this.props.savedWidth);
    if (myWidth >= img.naturalWidth) {
      this.setState({
        imageStatus: "loaded",
        error: "",
        width: img.offsetWidth,
        height: img.offsetHeight,
        dimensions: {
          height: img.offsetHeight,
          width: img.offsetWidth,
        },
      });
    } else {
      this.setState({
        imageStatus: "loaded",
        error: "",
        width: myWidth,
        height: img.offsetHeight,
        dimensions: {
          height: img.offsetHeight,
          width: img.offsetWidth,
        },
      });
    }
  };
  errorHandler = () => {
    this.setState({ error: "Image Loading Error" });
  };
  componentDidMount() {
    let myWidth;
    this.props.savedWidth == 0
      ? (myWidth = this.props.maxWidth)
      : (myWidth = this.props.savedWidth);
    this.setState({ width: myWidth, file: this.props.file });
  }
  onSaveClickHandler = () => {
    //Send to network call.
    let newWidth = this.SaveRef.current.state.width;
    this.props.onSave(newWidth);
  };
  onResizeClick = () => {
    this.props.onResize();
  };
  render() {
    const { width, height, file } = this.state;

    return (
      <div>
        {file && (
          <div className="Resize">
            <ResizableBox
              ref={this.SaveRef}
              className="box"
              align="center"
              width={width}
              height={height}
              lockAspectRatio={true}
              axis="both"
              maxConstraints={[width, height]}
              resizeHandles={["ne", "sw", "nw", "se"]}
            >
              <img
                onLoad={this.onImgLoad}
                onError={this.errorHandler}
                className="image"
                src={file}
                alt="Source"
              />
            </ResizableBox>
            <div>{this.state.error}</div>
            <div>
              <button onClick={this.onSaveClickHandler}>Save</button>
              <button onClick={this.onResizeClick}>Resize</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
ResizableImage.propTypes = {
  maxWidth: PropTypes.number,
  resizable: PropTypes.bool,
  file: PropTypes.string,
};
export default ResizableImage;
