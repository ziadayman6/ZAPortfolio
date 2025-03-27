import { Link } from "react-scroll";

function NavBar() {
  return (
    <center>
      <nav id="to">
        <Link to="to1" smooth={true} duration={500} className="slide">
          Services
        </Link>
        <Link to="to2" smooth={true} duration={500} className="slide">
          Skills
        </Link>
        <img src="imgs/logoportfolio.png" alt="none" />
        <Link to="to3" smooth={true} duration={500} className="slide">
          Work
        </Link>
        <Link to="to4" smooth={true} duration={500} className="slide">
          Contact me
        </Link>
      </nav>
    </center>
  );
}

export default NavBar;
