import { useEffect, useRef } from "react";
import Typed from "typed.js";

function PresentationText() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["23 YEARS OLD", "FRONT-END DEVELOPER", "UI/UX DESIGNER"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="child1">
      <img
        src="imgs/glassess.png"
        alt="none"
        className="img2 animate__animated animate__backInDown animate__delay-4s wow"
      />
      <h1 className="animate__animated animate__slideInLeft animate__delay-1s wow">
        &lt; ZIAD <span> AYMAN / &gt; </span>
      </h1>
      <p className="animate__animated animate__slideInLeft animate__delay-2s wow">
        I'M <span ref={typedElement}></span>
      </p>
      <div className="childchild animate__animated animate__slideInLeft animate__delay-3s wow">
        <a
          href="https://www.facebook.com/ziad.ayman3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/ziadaymann26/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a
          href="https://github.com/ziadayman6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ziadayman6"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
      <div className="ParentCV animate__animated animate__slideInLeft animate__delay-4s wow">
        <a href="CV/ZiadAymanCV.pdf" download className="CV">
          DOWNLOAD CV
        </a>
      </div>
    </div>
  );
}

export default PresentationText;
