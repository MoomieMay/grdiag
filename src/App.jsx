import AppRouter from "./routes/AppRouter";
import Typebot from "./components/Typebot";
import "./App.css";

function App() {
  return (
    <div>
      <AppRouter />
      <Typebot />
    </div>
  );
}

export default App;