import React, { useReducer, createContext, Dispatch, FC } from "react";
import { ActionType } from "./ActionType";
import combineReducers from "../Reducers/CombineReducers";

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

// We only need to set the type here ...
export const initialState: State = { count: 0 };

export const AppStateContext = createContext<State>(null as any);
export const AppDispatchContext = createContext<Dispatch<any>>(null as any);

export const Context: FC = ({ ...props }) => {
	const [state, dispatch] = useReducer(
		combineReducers,
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
