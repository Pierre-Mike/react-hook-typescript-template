import { State, Action, InitialState } from "../Context/Context";
import { ActionType } from "../Context/ActionType";

const baseReducer = (state: State = InitialState, action: Action) => {
	if (!state) state = InitialState;

	// delete error and success message for each action
	delete state.error;
	delete state.success;

	switch (action.type) {
		case ActionType.ADD_ERROR:
			return { ...state, error: action.error };
		case ActionType.RESET:
			return InitialState;
		case ActionType.ADD_SUCCESS:
			return { ...state, success: action.success };
		default:
			return state;
	}
};

export default baseReducer;
