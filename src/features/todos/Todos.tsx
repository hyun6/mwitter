import React from 'react';
import { useRootState } from '../../lib/store';
import { css } from '@emotion/react';
import DoneIcon from '@material-ui/icons/Done';
import { TodoItem } from './todos.slice';

const TodoList: React.FC = () => {
  const { todos } = useRootState((state) => state.todos);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, todo: TodoItem) => {
    console.log(e.target.checked);
    //todo.done = e.target.checked;
    // TODO: using todo action toggle
  };

  return (
    <ul css={todoListStyle}>
      {todos.map((todo) => (
        <li key={todo.id} css={todoItemStyle}>
          <span>
            <input type="checkbox" checked={todo.done} onChange={(e) => handleChange(e, todo)}></input>
            {todo.title}
            {todo.done && <DoneIcon></DoneIcon>}
          </span>
        </li>
      ))}
    </ul>
  );
};

const todoListStyle = css`
  list-style: none;
`;

const todoItemStyle = css`
  color: white;
`;

export default TodoList;
