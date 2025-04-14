
import './App.css'
import {PizzaRouter} from "./router/PizzaRouter.jsx";
import {BrowserRouter} from "react-router";
import {Header} from "./components/Header.jsx";

function App() {

  return (
      <>
          <BrowserRouter>
              <Header/>
              <PizzaRouter/>
          </BrowserRouter>
      </>
  )
}

export default App
