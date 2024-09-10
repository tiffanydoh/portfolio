import Home from "./component/pages/Home.tsx";
import Recommendations from "./component/pages/Recommendations.tsx";
import Experiences from "./component/pages/Experiences.tsx";
import Projects from "./component/pages/Projects.tsx";
import "primeicons/primeicons.css";
import tiffanyGIF from "./assets/images/general/tiffanyGIF.gif";
import NavBar from "./component/NavBar.tsx";

function App() {
  return (
    <div className="bg-[#fefae0]">
      <div className="flex justify-center">
        <img src={tiffanyGIF} alt="Tiffany Do gif" />
      </div>
      <div className="flex justify-center">
        <NavBar />
        <div>
          <Home />
          <Experiences />
          <Projects />
          <Recommendations />
        </div>
      </div>
    </div>
  );
}

export default App;
