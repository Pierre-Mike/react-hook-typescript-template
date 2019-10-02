import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Reducer from "./Reducers";
import { ActionType } from "./Context/ActionType";
import { State, InitialState } from "./Context/Context";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

describe("TEST REDUCER", () => {
	it("should return the initial state", () => {
		expect(Reducer(undefined, {})).toEqual(InitialState);
	});

	it("should handle null", () => {
		expect(Reducer(null, {})).toEqual(InitialState);
	});

	it("should handle ADD_ERROR", () => {
		expect(
			Reducer(InitialState, { type: ActionType.ADD_ERROR, error: "Error msg" })
		).toEqual({
			count: 0,
			error: "Error msg"
		});
	});

	it("should handle ADD_SUCCESS", () => {
		expect(
			Reducer(InitialState, {
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
			Reducer(InitialState, {
				type: ActionType.INCREMENT
			})
		).toEqual({
			count: 1
		});
	});

	it("should handle DECREMENT", () => {
		expect(
			Reducer(InitialState, {
				type: ActionType.DECREMENT
			})
		).toEqual({
			count: 0
		});
	});
	it("should handle DECREMENT", () => {
		expect(
			Reducer(InitialState, {
				type: ActionType.DECREMENT
			})
		).toEqual({
			count: -1
		});
	});
	it("should handle MUTLY_BY_2", () => {
		expect(
			Reducer(
				{ count: 2 },
				{
					type: ActionType.MULTIPLY_BY_2
				}
			)
		).toEqual({
			count: 4
		});
	});
});
