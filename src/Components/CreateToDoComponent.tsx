import React from "react";
import { ToDoFormProps } from "../ToDoForm/ToDoFormProps";
import { Button } from "./Button";

interface CreateToDoComponentProps {
	readonly onCreate: (toDo: ToDoFormProps) => void;
}

export  function CreateToDoComponent(props: CreateToDoComponentProps): JSX.Element {
	const [content, setContent] = React.useState<string>('');

	function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
		setContent(event.currentTarget.value);
	}

function handleClick(): void {
	if(content) {
	setContent('');
	props.onCreate({
		created: new Date(),
		done: false,
		content
	});
}

}

	return <div>
		<textarea value={content} onChange={handleChange}/><br/>
		<Button onClick={handleClick}>ADD</Button>
	</div>
}
