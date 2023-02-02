import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

//importamos los componentes creados
import about from './components/about';
import contact from './components/contact';
import home from "./components/home";
import NavBarExample from "./layouts/navbar";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
      <Route path='/' element={<NavBarExample/>}>
      <Route index element={<home />} />
      <Route path='about' element={<about />} />
      <Route path='contact' element={<contact />} />

      <Route path='*' element={<navigate replace to="/"/>}/>
      </Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
