import './App.css';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Contact from './Components/Contact';
import { BrowserRouter, Route , Routes} from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<div><NavBar/></div>}/>
   <Route path='/about' element={<div><About/></div>}/>
   <Route path='/contact' element={<div><Contact/></div>}/>
   </Routes>
   </BrowserRouter>
  
  );
}

export default App;
