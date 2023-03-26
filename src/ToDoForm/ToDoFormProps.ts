import { App } from "../App"
export interface ToDoFormProps {
  readonly content: string
  readonly created: Date
  readonly deadline?: Date
  readonly done: boolean
}

