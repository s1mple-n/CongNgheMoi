import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Modalinfor from "./pages/home/modal/Modalinfor";
import Infor from "./pages/home/Infor"

function App() {
    return ( <
        BrowserRouter >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/modal"
        element = { < Modalinfor / > }
        /> <
        Route path = "/infor"
        element = { < Infor / > }
        /> </Routes > < / BrowserRouter>
    );
}

export default App;