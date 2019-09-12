import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Context from "../Context/Context";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<Context>
			<Header />
		</Context>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
