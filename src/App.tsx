import React, { Suspense } from "react";
import "./App.css";
const Header = React.lazy(() => import("./Components/Header"));
const Counter = React.lazy(() => import("./Components/Counter"));
const Context = React.lazy(() => import("./Context/Context"));

const App: React.FC = () => {
	return (
		<div className="App">
			<Suspense fallback={<>Loading !!!</>}>
				<Context>
					<Header />
					<Counter />
				</Context>
			</Suspense>
		</div>
	);
};

export default App;
