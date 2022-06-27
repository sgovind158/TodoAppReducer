
import './App.css';
import {Route,Routes} from "react-router-dom"
import Navbar from './componets/Navbar';
import Login from './pages/Login';
import TodoApp from './pages/TodoApp';
import ShowComplete from './pages/ShowComplete';
import ShowUncomplete from './pages/ShowUncomplete';
import CounterApp from './pages/CounterApp';
import RequAuth from './HOCompnent/RequAuth';
import SingleTodo from './pages/SingleTodo';
import EditPage from './pages/EditPage';
import Login_p1 from './pages/Login_p1';
import RequAuthP1 from './HOCompnent/RequAuthP1';
import TodoAppP1 from './pages/TodoAppP1';
import SinglePageP1 from './pages/SinglePageP1';
import EditPageP1 from './pages/EditPageP1';

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
        
        <Route  path='/todo/:id' element= {<SingleTodo/>}/>
        <Route  path='/todo/:id/edit' element= {<EditPage/>}/>
        

        {/* pratice 1 start hear */}
        <Route path = "/login_p1" element = {<Login_p1/>}/>
     <Route path = "todoAppP1" element ={
             <RequAuthP1>
              <TodoAppP1/>
             </RequAuthP1>
     } />

     <Route path='/todo_p1/:id' element={<SinglePageP1/>}/>
     <Route path='/todo_p1/:id/edit' element={<EditPageP1/>}/>

           
          {/* pratice 1 end hear */}
      </Routes>
    
    </div>
  );
}

export default App;
