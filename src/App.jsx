import './app.scss';
import Navbar from './components/navbar/Navbar';
import {motion} from 'framer-motion';

const App = () => {
  return <div>
    <section><Navbar/></section>
    <section id='Homepage'>Hero</section>
    <section id='About'>Parallax</section>
    <section id='Services'>Services</section>
    <section id='Projects'>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id='Contact'>Contact</section>
  </div>;
};

export default App;
