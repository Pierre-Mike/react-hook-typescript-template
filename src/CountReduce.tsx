import React, { useReducer, createContext, Dispatch, FC } from "react";
import { State, Action } from "./Context";
import { ActionType } from "./ActionType";
const countReducer = (state: State, action: Action): State => {
	switch (action.type) {
		// ... to make sure that we don't have any other strings here ...
		case ActionType.INCREMENT:
			state.count += 1;
			return state;
		case ActionType.DECREMENT:
			state.count -= 1;
			return state;
		default:
			return state;
	}
};

export default countReducer;
