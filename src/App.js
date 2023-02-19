import { Navbar } from "./components";
import { AnimatedRoutes } from "./components/AnimatedRoutes";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <AnimatedRoutes />
    </div>
  );
};

export default App;
