
import './App.css';
import {BrowserRouter as Router ,Routes,Link,Route, BrowserRouter,} 
from 'react-router-dom';
import './Home.css';
import './box.css';
import Home from './Home';
import About from './About';
import Payment from './payment';
import Contact from './Contact';
import Admin from './admin';




function App() {
  return (
    <div>
      <Router>
      <ul>
      <li>
        <Link to={'About'}></Link></li>       
        </ul>
       
        <Routes>
          <Route exact path='/' element={<About/>}/>
          <Route  path='/About' element={<About/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/admin' element={<Admin/>}/>
          
          
        
          </Routes>
          
       </Router>
       
        </div>
  );
}

export default App;
