import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import TodoApp from "./components/TodoApp/TodoApp";
import MainContactApp from "./components/ContactApp/MainContactApp";
import JSTasks from "./components/JSTasks/JSTasks";

const myRoutes = createBrowserRouter([
    {
        path:"/",
        element: <App />
    },
    {
        path: "TodoApp",
        element: <TodoApp/>
    }
    ,{
        path: "ContactApp",
        element: <MainContactApp/>

    }
    ,{
        path: "JSTasks",
        element: <JSTasks/>

    }
])
export default myRoutes