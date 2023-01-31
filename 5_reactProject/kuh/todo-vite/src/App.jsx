import { Route, Routes } from "react-router-dom";
import { Layout, Main, Todo } from "components/page";

export function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Main />} />
				<Route path="/project/:id?" element={<Todo />} />
			</Route>
		</Routes>
	);
}
