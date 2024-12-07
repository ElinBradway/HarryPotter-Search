import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './NavBar.jsx';
import Hero from './components/Hero.jsx';
import Home from "./Pages/home.jsx";
import Contact from "./Pages/contact.jsx";
import Services from "./Pages/services.jsx";
import About from "./Pages/about.jsx";

import './App.css';

function App() {
return (
<BrowserRouter>
<NavBar />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/services" element={<Services />} />
  <Route path="/about" element={<About />} />
</Routes>
</BrowserRouter>
);

}

export default App;