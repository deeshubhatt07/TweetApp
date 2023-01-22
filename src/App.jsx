import { BrowserRouter,Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Views/Home';
import About from './Views/About';
import Contact from './Views/Contact';
import { Tweets } from './Views/Tweets';

const App = () => {
  return(
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/tweets' element={<Tweets />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;