// importing css and bootstrap csss
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// importing navbar banner skills projects contact and footer
import { NavBar } from "./files/nabbar";
import { Banner } from "./files/banner";
import { Skills } from "./files/skills";
import { Projects } from "./files/project";
import { Contact } from "./files/contact";
import { Footer } from "./files/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;