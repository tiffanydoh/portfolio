import Main from "./component/Main.tsx";
import Home from "./component/pages/Home.tsx";
import Recommendations from "./component/pages/Recommendations.tsx";
import "primeicons/primeicons.css";

function App() {
  return (
    <Main>
      <Home />;
      <Recommendations />
    </Main>
  );
}

export default App;
