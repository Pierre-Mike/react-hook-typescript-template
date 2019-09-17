import { State, Action } from "../Context/Context";
import { ActionType } from "../Context/ActionType";
const countReducer = (state: State, action: Action): State => {
	switch (action.type) {
		case ActionType.INCREMENT:
			if (state.count > 9) {
				state.error = "to big";
			} else {
				state.count += 1;
			}
			return { ...state };
		case ActionType.DECREMENT:
			state.count -= 1;
			return { ...state };
		default:
			return state;
	}
};
export default countReducer;
