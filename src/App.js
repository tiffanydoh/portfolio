import Main from "./component/Main.tsx";
import Home from "./component/pages/Home.tsx";
import Recommendations from "./component/pages/Recommendations.tsx";
import Experiences from "./component/pages/Experiences.tsx";
import "primeicons/primeicons.css";
import tiffanyGIF from "./images/tiffanyGIF.gif";

function App() {
  return (
    <Main>
      <div className="flex justify-center">
        <img src={tiffanyGIF} alt="Tiffany Do gif" />
      </div>
      <Home />;
      <Experiences />;
      <Recommendations />
    </Main>
  );
}

export default App;
