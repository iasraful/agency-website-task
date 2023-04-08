/** @format */

import Heading from "./components/Heading";
import "./App.css";
import Collection from "./components/Collection";
import Offer from "./components/Offer";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="App">
      <header>
        <Heading />
      </header>
      <Collection />
      <Offer />
      <Blog />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
