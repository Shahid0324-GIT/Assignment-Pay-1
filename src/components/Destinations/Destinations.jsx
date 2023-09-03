import { destinations } from "../../data";
import { useSnapCarousel } from "react-snap-carousel";
import { FaArrowLeft, FaArrowRight, FaDotCircle } from "react-icons/fa";

const Destinations = () => {
  const { scrollRef, pages, activePageIndex, next, prev } = useSnapCarousel();
  return (
    <>
      <h1>our destinations.</h1>
      <div className="carousel-container">
        <ul
          ref={scrollRef}
          style={{
            display: "flex",
            overflow: "hidden",
            scrollSnapType: "x mandatory",
          }}
          className="slick-container"
        >
          {destinations.map((destination) => {
            const { id, img, alt, name, location } = destination;
            return (
              <div key={id} className="destination-card">
                <img src={img} alt={alt} />
                <h4>{name}</h4>
                <div className="destination-info">
                  <p>{location}</p>
                  <FaDotCircle />
                </div>
              </div>
            );
          })}
        </ul>
        <div className="arrow-container">
          <button className="arrow-btn" onClick={() => prev()}>
            <FaArrowLeft />
          </button>
          <p>
            {activePageIndex + 1} / <span>{pages.length}</span>
          </p>
          <button className="arrow-btn" onClick={() => next()}>
            <FaArrowRight />
          </button>
        </div>
        {/* <ol style={{ display: "flex" }}>
          {pages.map((_, i) => (
            <li key={i}>
              <button
                style={i === activePageIndex ? { opacity: 0.5 } : {}}
                onClick={() => goTo(i)}
              >
                {i + 1}
              </button>
            </li>
          ))}
        </ol> */}
      </div>
    </>
  );
};

export default Destinations;
