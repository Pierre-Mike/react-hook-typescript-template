import React from "react";
import "./App.css";
import Header from "./Header";
import Context from "./Context";

const App: React.FC = () => {
	return (
		<div className="App">
			<Context>
				<Header />
			</Context>
		</div>
	);
};

export default App;
