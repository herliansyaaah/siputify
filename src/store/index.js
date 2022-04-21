import { configureStore } from "@reduxjs/toolkit";
import QueryReducer from "./slice";


export default configureStore({
  reducer: {
    query: QueryReducer
  }

}); 