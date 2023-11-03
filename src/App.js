import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";
import { AuthContextProvider } from "./component/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <Outlet />
    </AuthContextProvider>
  );
}

export default App;
