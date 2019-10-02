import { State, Action, InitialState } from "../Context/Context";
import { Reducer } from "react";
import countReducer from "./CountReduce";
import baseReducer from "./BaseReduce";
const combineReducers: Reducer<State, Action> = (
	state: State = InitialState,
	action: Action
): State => {
	// TODO UPDATE TO VERIFY IF STATE UPDATED AND RETURN DIRECTLY OR ADD PROMISE
	let newState = baseReducer(state, action);
	newState = countReducer(newState, action);
	return { ...newState };
};

export default combineReducers;
