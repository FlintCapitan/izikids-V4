import "./App.css";
import "./index.css"; // Убедимся, что стили подтянулись
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Approach from "./components/Approach";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Approach />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
