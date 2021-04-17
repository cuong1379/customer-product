import "antd/dist/antd.css";
import "react-alice-carousel/lib/alice-carousel.css";
import LandingPage from "./pages/LandingPage";
import Breakfast from "./pages/Breakfast";
import Dimsum from "./pages/Dimsum";
import HotPot from "./pages/HotPot";
import Introduce from "./pages/Introduce";
import Album from "./pages/Album";
import Contact from "./pages/Contact";
import Book from "./pages/Book";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/breakfast" component={Breakfast} />
          <Route path="/dimsum" component={Dimsum} />
          <Route path="/hotpot" component={HotPot} />
          <Route path="/introduce" component={Introduce} />
          <Route path="/album" component={Album} />
          <Route path="/contact" component={Contact} />
          <Route path="/book" component={Book} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
