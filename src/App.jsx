import './App.css'
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hire from './components/Hire';
import Testmonial from './components/Testimonial';
import Header from './components/Header';
import About from './components/About';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Skills from './components/Skills';

const App =()=> {
  return (
    <>
  <div>
    <Navbar/>
    <Header/>
    <About/>
    <Service/>
    <Skills/>
    <Portfolio/>
    <Testmonial/>
    <Blog/>
    <Hire/>
    <Contact/>
    <Footer/>
  </div>
    </>
  );
};


export default App
