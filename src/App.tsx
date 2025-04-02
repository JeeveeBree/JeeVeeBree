import { useState } from "react";
// import "./Css/App.css";
import "./Css/normalize.css";
import Homepage from "./components/Homepage";

function App() {
  const [count, setCount] = useState(0);

  return <Homepage />;
}
export default App;
