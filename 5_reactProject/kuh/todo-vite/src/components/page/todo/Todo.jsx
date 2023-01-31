import { TodoItem } from "components/molecules/todos/TodoItem";
import { useParams } from "react-router-dom";

export function Todo() {
	const { id } = useParams();
	return (
		<div>
			<TodoItem title={123}></TodoItem>
			<TodoItem title={123}></TodoItem>
			<TodoItem title={123}></TodoItem>
			<TodoItem title={123}></TodoItem>
			<TodoItem title={123}></TodoItem>
		</div>
	);
}
