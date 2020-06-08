import React from 'react';
import { ResizableBox } from 'react-resizable';
import './styles.css';
import './test.css';
class Upload extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			file: null,
			width: 400,
			height: 0,
			imageStatus: 'loading',
			dimensions: {}
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
		if (img.offsetWidth > this.state.width) {
			console.log(img.offsetWidth);
			this.setState({
				imageStatus: 'loaded',
				width: 400,
				height: img.offsetHeight,
				dimensions: {
					height: img.offsetHeight,
					width: img.offsetWidth
				}
			});
		} else {
			//console.log(img.offsetWidth);
			this.setState({
				imageStatus: 'loaded',
				width: img.offsetWidth,
				height: img.offsetHeight,
				dimensions: {
					height: img.offsetHeight,
					width: img.offsetWidth
				}
			});
		}
	};
	render() {
		const { width, height, dimensions, file } = this.state;
		console.log(dimensions);
		return (
			<div>
				<div className="Upload">
					<input type="file" onChange={this.handleChange} />
				</div>
				{file && (
					<div>
						<div className="Resize">
							<ResizableBox
								className="box"
								align="center"
								width={width}
								height={height}
								lockAspectRatio={true}
								axis="both"
								maxConstraints={[ width, height ]}
								resizeHandles={[ 'ne', 'sw', 'nw', 'se' ]}
							>
								<img onLoad={this.onImgLoad} className="image" src={file} alt="Image" />
							</ResizableBox>
						</div>
						<div className="Static">
							<ResizableBox
								className="box"
								align="center"
								width={width}
								height={height}
								lockAspectRatio={true}
								axis="none"
								maxConstraints={[ width, height ]}
							>
								<img onLoad={this.onImgLoad} className="image" src={file} alt="Image" />
							</ResizableBox>
						</div>
					</div>
				)}
			</div>
		);
	}
}
export default Upload;
