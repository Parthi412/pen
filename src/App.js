import logo from './logo.svg';
import './App.css';
import Li from './Li';
import { BrowserRouter,Routes,Route, Router } from 'react-router-dom';
import Show from './Show';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Li></Li>}></Route>
        <Route path='/new' element={<Show></Show>}></Route>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
