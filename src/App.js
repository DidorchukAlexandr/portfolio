import { Toaster } from "react-hot-toast";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import ScrollUp from "./components/scrollup/ScrollUp";
import { Skills } from "./components/skills/Skills";
import Work from "./components/work/Work";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
      <Toaster
        reverseOrder={false}
        containerStyle={{
          top: "50%",
        }}
      />
    </>
  );
};

export default App;
