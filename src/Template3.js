// import './App.css';
import ProductDetails from "./Components/ProductDetails.js";
import ServiceDetails from "./Components/ServiceDetails.js";
import res from "./Components/resource.js";
import Header from "./Components/Header.js";
import About from "./Components/About.js";
import Home from "./Components/Home.js";
import ContactUs from './Components/ContactUs/contactUs';
import Footer from "./Components/Footer.js";
import Gallery from "./Components/Gallery.js";
import Newsletter from "./Components/newsletter";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <>
    
      <div className="App">
      <Router>
        <Header/>
      <div>
        
          <Route path="/"
          component={About}
          exact>
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        
      </div>
    </Router>
        {/* <Home  />
        {<About description={res.aboutUs.shortDescription} label={res.aboutUs.label} image={res.aboutUs['team_member / owner'][0].img.src} alt={res.aboutUs['team_member / owner'][0].img.alt} /> } */}
        <ServiceDetails description={res.productDetails.description} products={res.productDetails.product} />
        <ProductDetails  description={res.productDetails.description} products={res.productDetails.product} />
        <Newsletter />
        <Gallery gallery={res.gallery} />
        
        <ContactUs />
        <Footer />
      </div>
      
    </>
  );
}

export default App;
