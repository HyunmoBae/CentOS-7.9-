import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import './App.css'
import CreateBreed from './component/CreateBreed';
import Table from './component/Table';

function App() {

  return (
    <BrowserRouter>
    <div className='App'>
         <Header/>
         <Routes>
          <Route path='breeds' element = {<Table/>}></Route>
          <Route path='update_data' element = {<CreateBreed/>}></Route>
         </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
