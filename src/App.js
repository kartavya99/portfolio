import HomePage from "./components/HomePage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
