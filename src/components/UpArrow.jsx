import { Link } from "react-scroll";

function UpArrow() {
  return (
    <div className="up">
      <Link to="to" smooth={true} duration={500} className="jump">
        <i className="fa-solid fa-chevron-up" style={{ color: "#ffffff" }}></i>
      </Link>
    </div>
  );
}

export default UpArrow;
