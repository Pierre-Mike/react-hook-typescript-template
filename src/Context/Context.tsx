import React, { useReducer, createContext, Dispatch, FC } from "react";
import { ActionType } from "./ActionType";
import Reducers from "../Reducers";

export type Action =
	| { type: ActionType.ADD_ERROR; error: string }
	| { type: ActionType.ADD_SUCCESS; success: string }
	| { type: ActionType.INCREMENT }
	| { type: ActionType.DECREMENT }
	| { type: ActionType.RESET };

export type State = {
	count: number;
	error?: string | null;
	success?: string | null;
};

// We only need to set the type here ...
export const InitialState: State = { count: 0 };

export const AppStateContext = createContext<State>(null as any);
export const AppDispatchContext = createContext<Dispatch<any>>(null as any);

export const Context = ({ ...props }) => {
	const [state, dispatch] = useReducer(
		Reducers,
		/* JSON.parse(localStorage.getItem(storageName)) ||  */
		InitialState
	);
	return (
		<AppStateContext.Provider value={state} {...props}>
			<AppDispatchContext.Provider value={dispatch} {...props} />
		</AppStateContext.Provider>
	);
};
export default Context;
