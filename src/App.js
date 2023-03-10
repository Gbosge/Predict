import './App.css';
import Nav from './component/nav/Nav';
import { Header } from './component/Header/Header';
import Featured from './component/featured/Featured';
import Subscribe from './component/Subscribe/Subscribe';
import Contact from './component/Contact/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
  <BrowserRouter> 
    <Nav/>
    <Routes>
    
    <Route path='/'element={ <div className="App" >
    <Header/>  
    </div>}/>
    
      <Route path='/Featured'element={<Featured/>}/>
      <Route path='/Subscribe'element={<Subscribe/>}/>
      <Route path='/Contact'element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
