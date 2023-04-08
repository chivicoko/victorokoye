import './App.css';
import HomePage from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <Routes>    
          <Route exact path='/' element={ <HomePage/>}> {HomePage} </Route>
          <Route exact path='/ContactVictorOkoye' element={ <Contact/>}> {Contact} </Route>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
