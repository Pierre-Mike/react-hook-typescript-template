import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Reducer from "./Reducers";
import { ActionType } from "./Context/ActionType";
import { State, initialState } from "./Context/Context";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

describe("TEST REDUCER", () => {
	it("should return the initial state", () => {
		expect(Reducer(undefined, {})).toEqual(initialState);
	});

	it("should handle null", () => {
		expect(Reducer(null, {})).toEqual(initialState);
	});

	it("should handle ADD_ERROR", () => {
		expect(
			Reducer(initialState, { type: ActionType.ADD_ERROR, error: "Error msg" })
		).toEqual({
			count: 0,
			error: "Error msg"
		});
	});

	it("should handle ADD_SUCCESS", () => {
		expect(
			Reducer(initialState, {
				type: ActionType.ADD_SUCCESS,
				success: "Success msg"
			})
		).toEqual({
			count: 0,
			success: "Success msg"
		});
	});
	it("should handle INCREMENT", () => {
		expect(
			Reducer(initialState, {
				type: ActionType.INCREMENT
			})
		).toEqual({
			count: 1
		});
	});

	it("should handle DECREMENT", () => {
		expect(
			Reducer(initialState, {
				type: ActionType.DECREMENT
			})
		).toEqual({
			count: 0
		});
	});
	it("should handle DECREMENT", () => {
		expect(
			Reducer(initialState, {
				type: ActionType.DECREMENT
			})
		).toEqual({
			count: -1
		});
	});
});
