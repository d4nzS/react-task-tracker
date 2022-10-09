import { useContext } from 'react';

import classes from './Todos.module.scss';
import TodoItem from './TodoItem';
import { TodosContext } from '../store/store'

const Todos: React.FC = () => {
  const todoCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todoCtx.items.map(item => <TodoItem
        key={item.id}
        text={item.text}
        onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
      />)}
    </ul>
  );
}

export default Todos;