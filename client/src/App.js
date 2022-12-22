import './App.css';
import Todo from "./components/Todo";
import Update from "./components/Update"
import { BrowserRouter,Routes,Route } from "react-router-dom";
// import {useNavigate} from 'react-router-dom'

function App() {
  // const navi=useNavigate()


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />}></Route>
        <Route path="/Update/:id" element={<Update/>}></Route>


      </Routes>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
