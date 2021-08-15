import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer.js";

import BlogsPage from "./pages/blogs.js";
import IndexPage from "./pages/index.js";
import AboutusPage from "./pages/about.js";
import OfficesPage from "./pages/offices.js";
import ContactusPage from "./pages/contact.js";
import ServicesPage from "./pages/services.js";
import WhoWeServePage from "./pages/who-weserve.js";
import BlogDetailPage from "./pages/single-blog.js";

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
        </Switch>
        <Footer />
      </body>
    </Router>
  );
}

export default App;
