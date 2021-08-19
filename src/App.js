import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer.js";

import BlogsPage from "./pages/blogs.js";
import IndexPage from "./pages/index.js";
import AboutusPage from "./pages/about.js";
import OfficesPage from "./pages/offices.js";
import Office1 from "./pages/offices/offices1.js";
import ContactusPage from "./pages/contact.js";
import ServicesPage from "./pages/services.js";
import WhoWeServePage from "./pages/who-weserve.js";
import BlogDetailPage from "./pages/single-blog.js";
import Resources from "./pages/resources";
import Whoweserve1 from "./pages/whoweserve/whoweserve1";

function App() {
  return (
    <Router>
      <body>
        <Header />
        <Switch>
          <Route exact path="/">
            <IndexPage />
          </Route>
          <Route path="/about">
            <AboutusPage />
          </Route>
          <Route path="/contact">
            <ContactusPage />
          </Route>
          <Route path="/offices">
            <OfficesPage />
          </Route>
          <Route path="/office1">
            <Office1 />
          </Route>
          <Route path="/services">
            <ServicesPage />
          </Route>
          <Route path="/blogs">
            <BlogsPage />
          </Route>
          <Route path="/who-we-serve">
            <WhoWeServePage />
          </Route>
          <Route path="/blog-details">
            <BlogDetailPage />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>


          <Route path="/whoweserve1">
            <Whoweserve1 />
          </Route>
        </Switch>
        <Footer />
      </body>
    </Router>
  );
}

export default App;
