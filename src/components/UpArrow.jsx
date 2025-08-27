import { Link } from "react-scroll";

function UpArrow() {
  return (
    <div className="up">
      <Link to="to" smooth={true} duration={500} className="jump">
        <i className="bi bi-chevron-up" style={{ color: "#ffffff" }}></i>
      </Link>
    </div>
  );
}

export default UpArrow;
