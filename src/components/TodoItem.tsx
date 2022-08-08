import React, { FC } from "react";
import { ITodo } from "../types/types";

interface TodosItemProps {
    todos: ITodo
}


const TodoItem: FC<TodosItemProps> = ({ todos }) => {
    return (
        <div>
            <input type="checkbox" checked={todos.completed} />
            {todos.id}. {todos.title}
        </div>
    )
}

export default TodoItem;