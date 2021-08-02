  
import Form from "./form";
import Todos from "./To-do";
import store from "./store";
import { Provider } from "react-redux";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Form />
        <Todos />
      </Provider>
    </div>
  );
}

export default App;