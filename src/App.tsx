import Header from "./Components/Header.tsx";
import Footer from "./Components/Footer.tsx";
import Presentation from "./Components/Presentation.tsx";
import About from "./Components/About.tsx";
import Book from "./Components/Book.tsx";
import Gallery from "./Components/Gallery.tsx";
import Plans from "./Components/Plans.tsx";

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Presentation />
        <Plans />
        <Book />
        <Gallery />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
