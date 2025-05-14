import React, { useState } from "react";
import Todo from "../models/todo";

type TodoContextOpj = {
    items: Todo[];
    addTodo: (text:string) => void;
    removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodoContextOpj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});


const TodoContextProvider: React.FC = (props)=>{
    const [todos , setTodos]= useState<Todo[]>([]);
    
    const addTodoHandler = (textTodo :string)=>{
    const newTodo = new Todo(textTodo);
    setTodos((prevTodos)=>{
    return prevTodos.concat(newTodo)
    })
   
    }
    const removeTodoHandler = (todoId: string) => {
        setTodos((prevTodos) => {
        return prevTodos.filter((todo) => todo.id !== todoId);
        });
    };
    const contextValue: TodoContextOpj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
    };
    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
}
export default TodoContextProvider;