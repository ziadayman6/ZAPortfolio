import { useEffect, useRef, useState } from "react";
import Title from "../components/Title";
import Information from "../components/Information";

function FourthSection() {
  const [isOpen4, setIsOpen4] = useState(false);
  const [height, setHeight] = useState("0px");

  function handleOpened4() {
    setIsOpen4(!isOpen4);
  }

  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const scrollHeight = containerRef.current.scrollHeight;
      if (isOpen4) {
        setHeight(`${scrollHeight}px`);
      } else {
        setHeight("0px");
      }
    }
  }, [isOpen4]);

  return (
    <div className="section5" id="to4">
      <center>
        <Title onClick={handleOpened4} isOpen={isOpen4}>
          CONTACT ME
        </Title>
        <div
          className="container"
          ref={containerRef}
          style={{
            height: height,
            transition: "height 1s ease",
            overflow: "hidden",
          }}
        >
          <Information />
        </div>
      </center>
    </div>
  );
}

export default FourthSection;
