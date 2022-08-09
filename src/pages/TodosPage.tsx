import React, { FC, useEffect, useState } from "react";
import { ITodo } from "./../types/types";
import List from "../components/List";
import TodoItem from "../components/TodoItem";
import axios from "axios";

const TodosPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        fetchTodos()
    }, [])

    let fetchTodos = async () => {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }
    return (
        <List
            items={todos}
            renderItem={(todos: ITodo) => <TodoItem todos={todos} key={todos.id} />}
        />
    )
}

export default TodosPage;