import ConditionalOutputIfElse from "./ConditionalOutput/ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutput/ContionalOutputInline";
import Highlight from "./Highlight";
import JavaScript from "./JavaScript";
import Styles from "./Styles";
import Add from "./add";
import Classes from "./classes";
import PathParameters from "./routing/PathParameters";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { LabState } from "../store";

import { deleteTodo, setTodo } from "../a4/ReduxExamples/todos/ToDoReducer";

function Assignment3() {
  const { todos } = useSelector((state: LabState) => state.todosReducer);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Assignment 3</h1>
      <h3>A4</h3>
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
            <button onClick={() => dispatch(deleteTodo(todo.id))}> Delete </button>
            <button onClick={() => dispatch(setTodo(todo))}> Edit </button>
          </li>
        ))}
      </ul>
      <h3>End A4</h3>

      <TodoItem/>
      <TodoList/>
      <ConditionalOutputIfElse/>
      <ConditionalOutputInline/>
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat architecto iusto alias molestias fugit ratione at? Ab mollitia, ipsa adipisci dignissimos assumenda laborum. Reprehenderit vel officia unde natus dolor consequuntur.
      </Highlight>
      <Add a={3} b={4}/>
      <Styles/>
      <Classes/>
      <JavaScript/>
      <PathParameters/>
    </div>
  );
}
export default Assignment3