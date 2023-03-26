import { ToDoFormProps } from "../ToDoForm/ToDoFormProps"
import { Button } from "./Button";

export interface ToDoComponentProps {
	toDo: ToDoFormProps;
	readonly onDoneClick: () => void;
}

export function ToDoFormComponent(props: ToDoComponentProps): JSX.Element {
	function renderContent(): JSX.Element {
		if(props.toDo.done) {
			return <s>{props.toDo.content}</s>;
		}
			return <>{props.toDo.content}</>
		}
	return <div>
			<span>{renderContent()}</span>
			<span>{props.toDo.created.toISOString()}</span>
			<span>{props.toDo.deadline?.toISOString()}</span>
			<Button onClick={props.onDoneClick}>DONE</Button>
		</div>
}
