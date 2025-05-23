import { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todosContext";


const NewTodo: React.FC = () => {
const todoCtx = useContext(TodosContext);


    const todoTextInputRef = useRef<HTMLInputElement>(null)


    const submitHandler = (event: React.FormEvent)=>{
event.preventDefault()

const enteredText = todoTextInputRef.current!.value;
if (enteredText.trim().length ===0) {
    return;
}
todoCtx.addTodo(enteredText);
    }
  return (
<form className={classes.form} onSubmit={submitHandler}>
    <label  htmlFor="text">Todo text</label>
    <input type="text" id="text" ref={todoTextInputRef} />
    <button >Add Todo</button>
</form>
)
}

export default NewTodo