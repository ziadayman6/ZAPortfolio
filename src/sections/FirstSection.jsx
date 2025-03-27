import { useEffect, useRef, useState } from "react";
import Service from "../components/Service";
import Title from "./../components/Title";

function FirstSection() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [height, setHeight] = useState("0px");

  function handleOpened1() {
    setIsOpen1(!isOpen1);
  }

  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const scrollHeight = containerRef.current.scrollHeight;
      if (isOpen1) {
        setHeight(`${scrollHeight}px`);
      } else {
        setHeight("0px");
      }
    }
  }, [isOpen1]);

  const services = [
    {
      id: 1,
      title: "FRONT-END DEVELOPER",
      description:
        "I'm responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, using variety of markup languages to create the web pages, Implementing design on mobile websites, and ensure that website visitors can easily interact with the pages.",
    },
    {
      id: 2,
      title: "UI / UX DESIGNER",
      description:
        "As a UI/UX designer I create the user interface for mobile apps, websites of all screen sizes or other interactive media.",
    },
  ];

  return (
    <div className="section2" id="to1">
      <center>
        <Title onClick={handleOpened1} isOpen={isOpen1}>
          SERVICES
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
          {services.map((service) => (
            <Service
              key={service.id}
              title={service.title}
              desc={service.description}
            />
          ))}
        </div>
      </center>
    </div>
  );
}

export default FirstSection;
