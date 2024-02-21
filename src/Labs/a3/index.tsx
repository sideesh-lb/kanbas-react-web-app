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

function Assignment3() {
  return (
    <div className="container">
      <h1>Assignment 3</h1>
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