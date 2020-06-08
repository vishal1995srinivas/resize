import React, { Component } from 'react';
import { Resizable } from 'react-resizable';
// import Resizable from '../lib/Resizable';
import { ResizableBox } from 'react-resizable';
import Image from './big.jpg';
import './styles.css';
import './test.css';

export default class TestLayout extends Component {
	state = { width: 600, height: 0, imageStatus: 'loading', dimensions: {} };
	onClick = () => {
		this.setState({ width: this.state.width, height: this.state.height });
	};
	onResize = (event, { element, size, handle }) => {
		this.setState({ width: size.width, height: size.height });
	};
	onImgLoad = ({ target: img }) => {
		console.log(img.offsetWidth);
		this.setState({
			imageStatus: 'loaded',
			width: img.offsetWidth,
			height: img.offsetHeight,
			dimensions: {
				height: img.offsetHeight,
				width: img.offsetWidth
			}
		});
	};
	render() {
		const { width, height, dimensions } = this.state;
		console.log(this.state.dimensions, width, height);
		return (
			<div>
				{/* <button onClick={this.onClick} style={{ marginBottom: '10px' }}>
					Reset first element's width/height
				</button> */}
				{/* <div className="layoutRoot"> */}
				{/* <Resizable
						className="booox1"
						lockAspectRatio={true}
						height={this.state.height}
						width={this.state.width}
						onResize={this.onResize}
						resizeHandles={[ 'sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's' ]}
					>
						<div
							className="box"
							style={{ width: this.state.width + 'px', height: this.state.height + 'px' }}
						>
							<span className="text">
								{'Raw use of <Resizable> element. 200x200, all Resize Handles.'}
							</span>
						</div>
					</Resizable>
					<ResizableBox className="box" width={200} height={200} lockAspectRatio={true}>
						<span className="text">{'<ResizableBox>'}</span>
					</ResizableBox>
					<ResizableBox
						className="custom-box box"
						width={200}
						height={200}
						handle={<span className="custom-handle custom-handle-se" />}
						handleSize={[ 8, 8 ]}
					>
						<span className="text">{'<ResizableBox> with custom handle in SE corner.'}</span>
					</ResizableBox>
					<ResizableBox
						className="custom-box box"
						width={200}
						height={200}
						handle={(h) => <span className={`custom-handle custom-handle-${h}`} />}
						handleSize={[ 8, 8 ]}
						resizeHandles={[ 'sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's' ]}
					>
						<span className="text">{'<ResizableBox> with custom handles in all locations.'}</span>
					</ResizableBox>
					<ResizableBox className="box" width={200} height={200} draggableOpts={{ grid: [ 25, 25 ] }}>
						<span className="text">Resizable box that snaps to even intervals of 25px.</span>
					</ResizableBox>
					<ResizableBox
						className="box"
						width={200}
						height={200}
						minConstraints={[ 150, 150 ]}
						maxConstraints={[ 500, 300 ]}
					>
						<span className="text">
							Resizable box, starting at 200x200. Min size is 150x150, max is 500x300.
						</span>
					</ResizableBox>
					<ResizableBox
						className="box box3"
						width={200}
						height={200}
						minConstraints={[ 150, 150 ]}
						maxConstraints={[ 500, 300 ]}
					>
						<span className="text">Resizable box with a handle that only appears on hover.</span>
					</ResizableBox>
					<ResizableBox className="box" width={200} height={200} lockAspectRatio={true}>
						<span className="text">Resizable square with a locked aspect ratio.</span>
					</ResizableBox>
					<ResizableBox className="box" width={200} height={120} lockAspectRatio={true}>
						<span className="text">Resizable rectangle with a locked aspect ratio.</span>
					</ResizableBox>
					<ResizableBox className="box" width={200} height={200} axis="x">
						<span className="text">Only resizable by "x" axis.</span>
					</ResizableBox>
					<ResizableBox className="box" width={200} height={200} axis="y">
						<span className="text">Only resizable by "y" axis.</span>
					</ResizableBox> */}
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
					<img onLoad={this.onImgLoad} className="image" src={Image} alt="Image" />
				</ResizableBox>
				<ResizableBox
					className="box"
					align="center"
					width={width}
					height={height}
					lockAspectRatio={true}
					axis="none"
					maxConstraints={[ width, height ]}
				>
					<img onLoad={this.onImgLoad} className="image" src={Image} alt="Image" />
				</ResizableBox>
				{/* <ResizableBox className="box" width={200} height={200} axis="none">
						<span className="text">Not resizable ("none" axis).</span>
					</ResizableBox> */}
			</div>
		);
	}
}
