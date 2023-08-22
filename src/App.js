import './App.css';
import Navbar from './components/navbar/Navbar';
import  { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import About from './components/About/About';
import SearchHome from './components/home/SearchHome';
import ImagePage from './components/home/ImagePage';
import PostProperty from './components/postProperty/PostProperty';
import Calendar from './components/Calendar/Calendar'


function App() {
  return (
    <div>
          <Router>
            {/* Navbar */}
          <Navbar/>
              <Routes>
              
                <Route path='/' element={<Home/>}  ></Route>
                <Route path='/About' element={<About/>}  ></Route>
                <Route path='/Login' element={<Login/>}  ></Route>
                <Route path='/SearchHome' element={<SearchHome/>} ></Route>
                <Route path='/ImagePage' element={<ImagePage/>} ></Route>
                <Route path='/PostProperty' element={<PostProperty/>} ></Route>
                <Route path='/Calendar' element={<Calendar/>} ></Route>
              </Routes>
          <Footer />
          </Router>
          
    </div>
  );
}

export default App;
