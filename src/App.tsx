import React from 'react';
import './App.css';
import { ToDoFormProps } from './ToDoForm/ToDoFormProps';
import { ToDoList } from './Components/ToDoList';
import { CreateToDoComponent } from './Components/CreateToDoComponent';

export function App():JSX.Element {
const [toDos, setToDos] = React.useState<ToDoFormProps[]>([
  {
    content: '1',
    created: new Date(),
    done: false
  }
]);


function handleDoneClick(toDo: ToDoFormProps): void {
  const found: number = toDos.findIndex((td: ToDoFormProps):boolean => td === toDo);
  toDos[found] = {
    ...toDos[found],
    done: true
  };
  setToDos([...toDos]);
  console.log(toDo)
}

function handleCreate(toDo: ToDoFormProps): void {
  setToDos([...toDos, toDo]);
}


  return (
    <div className="App">
      
      <ToDoList toDos={toDos} onDoneClick={handleDoneClick} />
      <CreateToDoComponent onCreate={handleCreate} />
      
    </div>
  );
}

