import React from 'react'

import classes from './TodoItem.module.css'
const TodoItem: React.FC<{ text: string; onRemoveItem:()=> void }> = (props) => {
  return <li className={classes.item} onClick={props.onRemoveItem}><p>{props.text}</p>
  <button>Remove</button></li>;
};

export default TodoItem;