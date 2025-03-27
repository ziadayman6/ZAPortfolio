import PresentationText from "../components/PresentationText";

function Presentation() {
  return (
    <div className="section1">
      <PresentationText />
      <img
        src="imgs/anapng.png"
        alt="none"
        className="wow animate__animated animate__slideInUp animate__slow img1"
      />
    </div>
  );
}

export default Presentation;
