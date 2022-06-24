
import './App.css';
import {Route,Routes} from "react-router-dom"
import Navbar from './componets/Navbar';
import Login from './pages/Login';
import TodoApp from './pages/TodoApp';
import ShowComplete from './pages/ShowComplete';
import ShowUncomplete from './pages/ShowUncomplete';
import CounterApp from './pages/CounterApp';
import RequAuth from './HOCompnent/RequAuth';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element= {<CounterApp/>} />
        <Route path='/todoApp' element={
          <RequAuth>
            <TodoApp/>
          </RequAuth>
        }
        />
        <Route path='/showCompleteTodo' element= {<ShowComplete/>} />
        <Route path='/showUnCompleteTodo' element= {<ShowUncomplete/>} />
        <Route path='/login' element= {<Login/>} />
      </Routes>
    
    </div>
  );
}

export default App;
