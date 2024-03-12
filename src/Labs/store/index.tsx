import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../a4/ReduxExamples/HelloRedux/HelloReducer";
import counterReducer from "../a4/ReduxExamples/CounterRedux/CounterReducer";
import addReducer from "../a4/ReduxExamples/AddRedux/AddReducer";

export interface LabState {
  helloReducer: {
    message: string;
  };
  counterReducer: {
    count: number;
  };
  addReducer: {
    sum: number;
  };

  
}

const store = configureStore({
  reducer: {
    helloReducer,
    counterReducer,
    addReducer,
  },
});

export default store;