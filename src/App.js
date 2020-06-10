import React from 'react';
import './App.css';
import ResizableImage from './Components/ResizableImage';
function App() {
	return (
		<div className="App">
			<ResizableImage maxWidth={200} static={false} />
		</div>
	);
}

export default App;
