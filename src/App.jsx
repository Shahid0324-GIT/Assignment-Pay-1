import Destinations from "./components/Destinations/Destinations";
import Discount from "./components/Discount/Discount";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Opinion from "./components/Opinion/Opinion";
import Testimonial from "./components/Testimonials/Testimonial";

const App = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <section className="hero-section">
        <Hero />
      </section>
      <section className="review-section">
        <Opinion />
      </section>
      <section className="destination-section">
        <Destinations />
      </section>
      <section className="discount-section">
        <Discount />
      </section>
      <section className="form-section">
        <Form />
      </section>
      <section className="testimonial-section">
        <Testimonial />
      </section>
      <footer className="footer-section">
        <Footer />
      </footer>
    </>
  );
};

export default App;
