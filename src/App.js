import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Skill from './components/Skill.jsx';
import Gallery from "./components/Gallery/index.jsx"
import Footer from './components/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <main>
        <Header />
        <About />
        <Gallery />
        <Skill />
        <Footer />
    </main>
  );
}

export default App;
