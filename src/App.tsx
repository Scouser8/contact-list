import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Provider store={store}>
        <Home />
      </Provider>
    </Layout>
  );
}

export default App;
