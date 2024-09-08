import Home from "./component/pages/Home.tsx";
import Recommendations from "./component/pages/Recommendations.tsx";
import Experiences from "./component/pages/Experiences.tsx";
import Projects from "./component/pages/Projects.tsx";
import "primeicons/primeicons.css";
import tiffanyGIF from "./images/tiffanyGIF.gif";

function App() {
  return (
    <div className="bg-blue-100">
      <div className="flex justify-center">
        <img src={tiffanyGIF} alt="Tiffany Do gif" />
      </div>
      <Home />;
      <Experiences />;
      <Projects />;
      <Recommendations />;
    </div>
  );
}

export default App;
