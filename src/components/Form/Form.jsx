import { useRef, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
const Form = () => {
  const [star, setStar] = useState(0);
  const [room, setRoom] = useState(0);
  const refArrival = useRef();
  const refDeparture = useRef();
  return (
    <>
      <img
        src="https://res.cloudinary.com/dsj3rl8qw/image/upload/v1693727855/Group_167_mlfrur.png"
        className="form-image"
        alt="form-image"
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="113"
        height="113"
        viewBox="0 0 113 113"
        fill="none"
        className="form-shape"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M56.5 113C87.7041 113 113 87.7041 113 56.5C113 25.2959 87.7041 0 56.5 0C25.2959 0 0 25.2959 0 56.5C0 87.7041 25.2959 113 56.5 113ZM56.5 87.4405C73.588 87.4405 87.4405 73.588 87.4405 56.5C87.4405 39.412 73.588 25.5595 56.5 25.5595C39.412 25.5595 25.5595 39.412 25.5595 56.5C25.5595 73.588 39.412 87.4405 56.5 87.4405Z"
          fill="#F8E27E"
          fillOpacity="0.2"
        />
      </svg>
      <div className="form-container">
        <h3>book now</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="city">city</label>
          <input id="city" type="text" placeholder="Name of the city" />
          <div className="arrival-departure-container">
            <div>
              <label htmlFor="arrival">arrival</label>
              <input
                id="arrival"
                type="text"
                ref={refArrival}
                placeholder="10 September"
                onFocus={() => (refArrival.current.type = "date")}
                onBlur={() => (refArrival.current.type = "date")}
              />
            </div>
            <div>
              <label htmlFor="departure">departure</label>
              <input
                id="departure"
                type="text"
                ref={refDeparture}
                placeholder="10 September"
                onFocus={() => (refDeparture.current.type = "date")}
                onBlur={() => (refDeparture.current.type = "date")}
              />
            </div>
          </div>
          <div className="star-room-container">
            <div className="container">
              <label>Star</label>
              <div className="container-1">
                <FaMinus
                  className="minus"
                  onClick={() => setStar((prev) => prev - 1)}
                />
                <p>{star}</p>
                <FaPlus
                  className="plus"
                  onClick={() => setStar((prev) => prev + 1)}
                />
              </div>
            </div>
            <div className="container">
              <label>Room</label>
              <div className="container-1">
                <FaMinus
                  className="minus"
                  onClick={() => setRoom((prev) => prev - 1)}
                />
                <p>{room}</p>
                <FaPlus
                  className="plus"
                  onClick={() => setRoom((prev) => prev + 1)}
                />
              </div>
            </div>
          </div>
          <button type="button" className="form-btn">
            book now
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
