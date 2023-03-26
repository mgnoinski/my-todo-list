import React from 'react';
import './App.css';
import { ToDoFormProps } from './ToDoForm/ToDoFormProps';
import { ToDoList } from './ToDoList/ToDoList';

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

  return (
    <div className="App">
      <ToDoList toDos={toDos} onDoneClick={handleDoneClick} />
      <form>
      <p>To Do...</p>
      <input type={'text'} placeholder={"To do..."}></input><br/>
      <p>Deadline date</p>
      <input type={'date'}></input><br/>
      <button type='submit'>Add</button><br/>
      </form>
    </div>
  );
}

