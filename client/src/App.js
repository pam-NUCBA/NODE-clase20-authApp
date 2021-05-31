import "./App.css";
import Home from "./components/sections/Home";
import Navbar from "./components/shared/Navbar";
import GuestState from "./context/guestsContext/GuestState";

function App() {
  return (
    <GuestState>
      <Navbar />
      <Home />
    </GuestState>
  );
}

export default App;
