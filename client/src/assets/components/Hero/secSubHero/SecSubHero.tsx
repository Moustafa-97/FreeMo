import Marquee from "react-fast-marquee";
import "./secSubHero.css";

import logo1 from "./imgs/logo-1-150x40.png";
import logo2 from "./imgs/logo-2-150x40.png";
import logo3 from "./imgs/logo-3-150x78.png";
import logo4 from "./imgs/logo-4-150x57.png";
import logo5 from "./imgs/logo-5-150x38.png";

export default function SecSubHero() {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    // Add more logos as needed
  ];

  return (
    <>
      <section className={"logoScroller"}>
        <header className="secHeader">
          <h2 className="secHeaderH">Our Partners</h2>
          <p className="secHeaderP">Explore our partners </p>
        </header>
        <Marquee autoFill={true} className={"logoTrack"}>
          {logos.map((logo, index) => (
            <div style={{ marginRight: "20px", height: "100%" }}>
              <img
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                className={"logo"}
              />
            </div>
          ))}
        </Marquee>
      </section>
    </>
  );
}
