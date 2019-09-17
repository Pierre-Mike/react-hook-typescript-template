import React, { useContext, FC } from "react";
import { AppStateContext } from "../../Context/Context";

const Header: FC = () => {
	const state = useContext(AppStateContext);
	return <header className="App-header">{state.error}</header>;
};

export default Header;
