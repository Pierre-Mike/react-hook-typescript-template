import React, { useReducer, createContext, Dispatch, FC } from "react";
import { ActionType } from "./ActionType";
import countReducer from "./CountReduce";

export interface Action {
	type: ActionType;
	error?: string | null;
	success?: string | null;
}
export type State = {
	count: number;
	error?: string | null;
	success?: string | null;
};
const initialState: State = { count: 0 };

const baseReducer = (state: State, action: Action) => {
	state.error = null;
	switch (action.type) {
		case ActionType.RESET:
			return initialState;
		case ActionType.ADD_ERROR:
			state.error = action.error;
			return state;
		case ActionType.ADD_SUCCESS:
			state.success = action.success;
			return state;
		default:
			return state;
	}
};

// We only need to set the type here ...

export const AppStateContext = createContext<State>(null as any);
export const AppDispatchContext = createContext<Dispatch<any>>(null as any);
const reducer = (state: State, action: Action): State => {
	state = baseReducer(state, action);

	state = countReducer(state, action);

	return { ...state };
};
export const Context: FC = ({ ...props }) => {
	const [state, dispatch] = useReducer(
		reducer,
		/* JSON.parse(localStorage.getItem(storageName)) ||  */
		initialState
	);
	return (
		<AppStateContext.Provider value={state} {...props}>
			<AppDispatchContext.Provider value={dispatch} {...props} />
		</AppStateContext.Provider>
	);
};
export default Context;
