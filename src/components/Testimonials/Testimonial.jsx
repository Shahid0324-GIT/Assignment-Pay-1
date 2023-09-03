import { testimonials } from "../../data";

const Testimonial = () => {
  return (
    <>
      <h1 className="testimonial-head">Testimonials</h1>
      <hr />
      <div className="testimonial-container">
        {testimonials.map((item) => {
          const { id, name, img, alt, rev } = item;
          return (
            <div className="testimonial-item-container" key={id}>
              <img src={img} alt={alt} className="testimonial-item-image" />
              <h4>{name}</h4>
              <hr />
              <p>{rev}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Testimonial;
