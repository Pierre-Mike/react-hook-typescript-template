import React, { useContext, FC } from "react";
import { AppStateContext, AppDispatchContext } from "../Context/Context";
import { ActionType } from "../Context/ActionType";
import styles from "./Header.module.css";

const Header: FC = () => {
	const state = useContext(AppStateContext);
	const dispatch = useContext(AppDispatchContext);
	return (
		<header className="App-header">
			<button onClick={() => dispatch({ type: ActionType.INCREMENT })}>
				+ 1
			</button>
			<button onClick={() => dispatch({ type: ActionType.DECREMENT })}>
				- 1
			</button>
			<button onClick={() => dispatch({ type: ActionType.RESET })}>
				reset
			</button>
			COUNT {state.count}
		</header>
	);
};

export default Header;
