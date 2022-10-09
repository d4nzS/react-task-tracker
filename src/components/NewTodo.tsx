import { useRef, useContext } from 'react';

import classes from './NewTodo.module.scss';
import { TodosContext } from '../store/store';

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent): void => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (!enteredText.trim()) {
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef}/>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;