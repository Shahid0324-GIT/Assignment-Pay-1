import { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { links } from "../../data";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div
          className="links-container"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* social links */}
        <ul className="social-icons">
          <li>
            <button type="button" className="nav-btn-1">
              offers
            </button>
          </li>
          <li>
            <button type="button" className="nav-btn-2">
              courses
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
