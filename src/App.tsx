import React, {FC} from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// NAVBAR
import Navbar from "./Components/Navbar";


// PÁGINAS
import Home from "./Pages/Home";


// COMPONENTES
// botão do chat fixo no canto inferior direito
import ChatBox from "./Components/ChatBox";



const App: FC = () => {
  return (
      <Router>
        <Navbar />
        <Switch>
            <Route path="/" component={Home} exact />
        </Switch>
        <ChatBox />
      </Router>
  );
}

export default App;
