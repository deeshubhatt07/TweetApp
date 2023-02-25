import { BrowserRouter,Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Views/Home';
import About from './Views/About';
import Contact from './Views/Contact';
import { Tweets } from './Views/Tweets';
import LoginPage from './Component/Login';
import Register from './Component/Register';

const App = () => {
  return(
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/tweets' element={<Tweets />}/>
          <Route path="/" element={<LoginPage />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;