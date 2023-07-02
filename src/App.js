import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

/* COMPONENTS */
import Navbar from './components/Navbar';
import Frontpage from './components/pages/Frontpage';

/* GRADE 9 IMPORTS */
import Grade9 from './components/pages/Grade9';
import Algebra9 from './components/pages/topics/topics9/Algebra9';
import Geom9 from './components/pages/topics/topics9/Geom9';

/* GRADE 10 IMPORTS */
import Grade10 from './components/pages/Grade10';


/* GRADE 11 IMPORTS */
import Grade11 from './components/pages/Grade11';


/* GRADE 12 IMPORTS */
import Grade12 from './components/pages/Grade12';

function App() {
  return (
    
      <Router> 
        <Navbar/>
        <Routes>
          
        <Route path="/" element={<Frontpage/> } />
        <Route path="/Grade9" element={<Grade9/>} />
        <Route path="/Algebra9" element={<Algebra9/>} />
        <Route path='/Geom9' element={<Geom9/>} />


      <Route path='/Grade10' element={<Grade10/>} />
        

      <Route path='/Grade11' element={<Grade11/>} />

      <Route path='/Grade12' element={<Grade12/>} />
        </Routes>
      </Router>
      
  );
}

export default App;
