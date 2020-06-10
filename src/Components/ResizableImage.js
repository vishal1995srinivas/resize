import React from 'react';
import { ResizableBox } from 'react-resizable';
import PropTypes from 'prop-types';
import './styles.css';
import './test.css';
class ResizableImage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			file: null,
			width: 0,
			height: 0,
			imageStatus: 'loading',
			dimensions: {},
			error: ''
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({
			file: URL.createObjectURL(event.target.files[0])
		});
	}
	onResize = (event, { element, size, handle }) => {
		this.setState({ width: size.width, height: size.height });
	};
	onImgLoad = ({ target: img }) => {
		console.log(img.naturalWidth, img.naturalHeight);
		if (this.props.maxWidth >= img.naturalWidth) {
			this.setState({
				imageStatus: 'loaded',
				width: img.offsetWidth,
				height: img.offsetHeight,
				dimensions: {
					height: img.offsetHeight,
					width: img.offsetWidth
				}
			});
		} else {
			this.setState({
				imageStatus: 'loaded',
				width: this.props.maxWidth,
				height: img.offsetHeight,
				dimensions: {
					height: img.offsetHeight,
					width: img.offsetWidth
				}
			});
		}
	};
	errorHandler = () => {
		this.setState({ error: 'Image Loading Error' });
	};
	componentDidMount() {
		this.setState({ width: this.props.maxWidth });
	}
	render() {
		const { width, height, dimensions, file } = this.state;
		// console.log(dimensions, width, height);
		return (
			<div>
				<div className="Upload">
					<input type="file" onChange={this.handleChange} />
				</div>
				{file && (
					<div className="Resize">
						<ResizableBox
							className="box"
							align="center"
							width={width}
							height={height}
							lockAspectRatio={true}
							axis={`${this.props.static ? 'none' : 'both'}`}
							maxConstraints={[ width, height ]}
							resizeHandles={[ 'ne', 'sw', 'nw', 'se' ]}
						>
							<img
								onLoad={this.onImgLoad}
								onError={this.errorHandler}
								className="image"
								src={file}
								alt="Uploaded Image"
							/>
						</ResizableBox>
					</div>
				)}
			</div>
		);
	}
}
ResizableImage.propTypes = {
	maxWidth: PropTypes.number,
	static: PropTypes.bool
};
export default ResizableImage;
