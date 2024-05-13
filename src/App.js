import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import NavRoutes from "./routes";
import NavBar from "./navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (<Router>
            <NavBar/>
            <NavRoutes/>
        </Router>);
}

export default App;
