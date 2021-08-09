import './App.css';
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";

import ChatBox from "./Components/ChatBox";


function App() {
  return (
    <>
      <Navbar />
        <Home />
        <ChatBox />
    </>
  );
}

export default App;
