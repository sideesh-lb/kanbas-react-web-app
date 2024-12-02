import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariable";
import ClickEvents from "./Clickevents";
import DateStateVariable from "./DateStateVariables";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";
import Counter from "./counter";

function Assignment4() {

  function sayHello() {
    alert("Hello")
  }

  return (
    <div className="container">
      <h1>Assignment 4</h1>

      <ClickEvents/>
      <PassingDataOnEvent/>
      <PassingFunctions theFunction={sayHello} />
      <EventObject/>
      <Counter/>
      <BooleanStateVariables/>
      <StringStateVariables/>
      <DateStateVariable/>
      <ObjectStateVariable/>
      <ArrayStateVariable/>
      <ParentStateComponent/>
      <ReduxExamples/>
    </div>
  );
}

export default Assignment4