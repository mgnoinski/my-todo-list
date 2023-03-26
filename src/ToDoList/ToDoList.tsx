import { ToDoFormComponent } from "../ToDoForm/ToDoFormComponent";
import { ToDoFormProps } from "../ToDoForm/ToDoFormProps"
import { App } from "../App";
interface ToDoListProps {
    toDos: ToDoFormProps[];
}


export function ToDoList(props: ToDoListProps):JSX.Element {
    function renderToDo(toDo: ToDoFormProps): JSX.Element {
        return <ToDoFormComponent toDo={toDo}/>
    }


  return <div>
    <span>ToDoList</span>
    {props.toDos.map(renderToDo)}
    
    </div>
}
