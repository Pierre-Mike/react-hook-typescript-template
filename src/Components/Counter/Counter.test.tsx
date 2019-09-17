import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import Context from "../../Context/Context";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<Context>
			<Counter />
		</Context>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
