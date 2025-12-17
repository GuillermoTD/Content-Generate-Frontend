import { Outlet } from "react-router";
import "./styles/App.css";
function App() {
  return (
      <>
      Esto es un header
        <Outlet />
      </>
  );
}

export default App;
