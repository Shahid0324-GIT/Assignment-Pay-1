import { peopleOpinion } from "../../data";

const Opinion = () => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="168"
      height="168"
      viewBox="0 0 168 168"
      fill="none"
      className="opinion-shape-1"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M84 168C130.392 168 168 130.392 168 84C168 37.6081 130.392 0 84 0C37.6081 0 0 37.6081 0 84C0 130.392 37.6081 168 84 168ZM84 130C109.405 130 130 109.405 130 84C130 58.5949 109.405 38 84 38C58.5949 38 38 58.5949 38 84C38 109.405 58.5949 130 84 130Z"
        fill="#87CC81"
        fillOpacity="0.2"
      />
    </svg>
    <div className="review-card-container">
      {peopleOpinion.map((item) => {
        const { id, name, alt, img, review } = item;
        return (
          <div className="card-container" key={id}>
            <img src={img} alt={alt} className="card-image" />
            <div className="review-text">
              <h5 className="review-name">{name}</h5>
              <p className="review-para">{review}</p>
            </div>
          </div>
        );
      })}
    </div>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="47"
      height="47"
      viewBox="0 0 47 47"
      fill="none"
      className="opinion-shape-2"
    >
      <path
        d="M0 46.5C0 40.3935 1.20276 34.3469 3.5396 28.7052C5.87645 23.0636 9.30161 17.9375 13.6195 13.6195C17.9375 9.30161 23.0636 5.87644 28.7052 3.5396C34.3469 1.20276 40.3935 -2.66922e-07 46.5 0L46.5 13.95C42.2255 13.95 37.9928 14.7919 34.0437 16.4277C30.0945 18.0635 26.5062 20.4611 23.4837 23.4837C20.4611 26.5062 18.0635 30.0945 16.4277 34.0437C14.7919 37.9928 13.95 42.2255 13.95 46.5H0Z"
        fill="#BE554B"
      />
    </svg>

    <div className="review-about-container">
      <h1 className="review-about-head">
        tropical adventure <br />
        <span className="review-about-head-1">for students</span>
      </h1>
      <p className="review-about-para">
        student tropical vacation: relax and recharge
      </p>
      <ul className="review-about-list-container">
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </ul>
      <button type="button" className="assignment-btn review-btn">
        explore more
      </button>
    </div>
  </>
);

export default Opinion;
