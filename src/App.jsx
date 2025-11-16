import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Social from "./components/Social";

function App() {
  return (
    <>
      <Header />
      <Education />
      <Experience />
      <About />
      <Contact />
      <Social />
    </>
  );
}

export default App;
