import { ToDoFormComponent } from "../ToDoForm/ToDoFormComponent";
import { ToDoFormProps } from "../ToDoForm/ToDoFormProps"
interface ToDoListProps {
    readonly toDos: ToDoFormProps[];
    readonly onDoneClick:(toDo: ToDoFormProps) => void;
}


export function ToDoList(props: ToDoListProps):JSX.Element {
    function renderToDo(toDo: ToDoFormProps): JSX.Element {
        return <ToDoFormComponent toDo={toDo} onDoneClick={(): void => props.onDoneClick(toDo)}/>
    }


  return <div>
    <span>ToDoList</span>
    {props.toDos.map(renderToDo)}
    
    </div>
}
