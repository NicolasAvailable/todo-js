import './styles.css';

import { todo, TodoList } from './class';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo) );

