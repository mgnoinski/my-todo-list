import { ToDoList } from "../ToDoList/ToDoList"
import { ToDoFormProps } from "./ToDoFormProps"
import { App } from "../App";

export interface ToDoComponentProps {
	toDo: ToDoFormProps;
}


export function ToDoFormComponent(props: ToDoComponentProps): JSX.Element {
	return <div>
			<span>{props.toDo.content}</span>
			<span>{props.toDo.created.toISOString()}</span>
			<span>{props.toDo.done}</span>
			<span>{props.toDo.deadline?.toISOString()}</span>
		</div>
}
