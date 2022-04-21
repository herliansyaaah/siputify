import { Provider } from "react-redux";
import store from "./store";
import React from "react";

import Home from "./home/index";

const App = () => {
  return (
		<Provider store={store}>
		  <Home />
		</Provider>
	  );
};
export default App;