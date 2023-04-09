import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import HeadBanner from "./components/HeadBanner";
import SimpleFooter from "./components/SimpleFooter";

function App() {
  return (
    <div>
      <header>
      <Navbar />
      </header>
      <body  class="flex justify-center">
      <HeadBanner/>
      </body>
      <footer>
      <SimpleFooter/>
      </footer>
    </div>
  );
}

export default App;
