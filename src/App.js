import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Work from './components/work/Work';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contect/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Cogniter from './components/Company/Cogniter';
function App() {
  return (
      <>
      <Header/>
      <main className='main'>
        <Home/>
        <About/> 
        <Cogniter/>
        <Skills/>
        <Services/> 
        <Qualification/>
        <Work/>
        <Testimonials/>
        <Contact/>
      </main>
      <Footer/>
      <ScrollUp />
    </>
  );
}

export default App;
